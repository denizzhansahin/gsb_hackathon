using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.Volunteering;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class VolunteeringBs : IVolunteeringBs
{
    private readonly IVolunteeringRepository _volunteeringRepository;
    private readonly IGrantTypeRepository _grantTypeRepository;


    public VolunteeringBs(IVolunteeringRepository volunteeringRepository, IGrantTypeRepository grantTypeRepository)
    {
        _volunteeringRepository = volunteeringRepository;
        _grantTypeRepository = grantTypeRepository;
    }

    public async Task<ApiResponse<List<VolunteeringGetDto>>> GetAllAsyncWithGrantTypeId(int id)
    {
        var itemList = await _volunteeringRepository.GetAllAsync(prd => prd.GrantTypeId == id);

        if(itemList.Count == 0)
        {
            return ApiResponse<List<VolunteeringGetDto>>.Fail(404, "Gönüllülük tablosuna ait veri bulunmuyor");
        }

        var dtoList = new List<VolunteeringGetDto>();

        foreach(var item in itemList)
        {
            var type = await _grantTypeRepository.GetAsync(prd => prd.Id == item.GrantTypeId);
            dtoList.Add(new VolunteeringGetDto
            {
                Id = item.Id,
                Conditions = item.Conditions,
                VolunteeringContent = item.VolunteeringContent,
                EndDate = item.EndDate,
                FirstDate = item.FirstDate,
                Period = item.Period,
                Title = item.Title,
                Type = type.Name
            });
        }
        return ApiResponse<List<VolunteeringGetDto>>.Success(200, dtoList);
    }

    public async Task<ApiResponse<VolunteeringGetDto>> GetbyId(int id)
    {
        var item = await _volunteeringRepository.GetAsync(prd => prd.Id == id);

        if(item == null)
        {
            return ApiResponse<VolunteeringGetDto>.Fail(400, "İlgili id ye göre veri yok");
        }
        var type = await _grantTypeRepository.GetAsync(prd => prd.Id == item.GrantTypeId);
        var dto = new VolunteeringGetDto
        {
            Id = item.Id,
            Conditions = item.Conditions,
            VolunteeringContent = item.VolunteeringContent,
            EndDate = item.EndDate,
            FirstDate = item.FirstDate,
            Period = item.Period,
            Title = item.Title,
            Type = type.Name
        };

        return ApiResponse<VolunteeringGetDto>.Success(200, dto);
    }
}
