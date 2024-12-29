using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.Grant;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class GrantBs : IGrantBs
{
    private readonly IGrantRepository _grantRepository;
    private readonly IGrantTypeRepository _grantTypeRepository;

    public GrantBs(IGrantRepository grantRepository, IGrantTypeRepository grantTypeRepository)
    {
        _grantRepository = grantRepository;
        _grantTypeRepository = grantTypeRepository;
    }

    public async Task<ApiResponse<List<GrantGetDto>>> GetAllAsync()
    {
        var listItems = await _grantRepository.GetAllAsync();

        if (listItems.Count == 0)
        {
            return ApiResponse<List<GrantGetDto>>.Fail(404, "Not found Grants");
        }

        var listDtos = new List<GrantGetDto>();
        foreach (var item in listItems)
        {
            var type = await _grantTypeRepository.GetbyIdAsync(item.GrantTypeId);
            listDtos.Add(new GrantGetDto
            {
                Id = item.Id,
                Title = item.Title,
                GrantContent = item.GrantContent,
                Period = item.Period,
                Deadline = item.Deadline,
                Firstline = item.Firstline,
                WhoCanApplyContent = item.WhoCanApplyContent,
                StageArray = item.StageArray,
                GrantType = type.Name
            });
        }
        return ApiResponse<List<GrantGetDto>>.Success(200, listDtos);
    }

    public async Task<ApiResponse<GrantGetDto>> GetAsync(int id)
    {
        var item = await _grantRepository.GetbyIdAsync(id);

        if (item == null)
        {
            return ApiResponse<GrantGetDto>.Fail(404, "Not found Grant");
        }
        var type = await _grantTypeRepository.GetbyIdAsync(item.Id);
        var dto = new GrantGetDto
        {
            Id = item.Id,
            Title = item.Title,
            GrantContent = item.GrantContent,
            Period = item.Period,
            Deadline = item.Deadline,
            Firstline = item.Firstline,
            WhoCanApplyContent = item.WhoCanApplyContent,
            StageArray = item.StageArray,
            GrantType = type.Name
        };
        return ApiResponse<GrantGetDto>.Success(200, dto);
    }
}
