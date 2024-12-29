using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.Advertisement;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class AdvertisementBs : IAdvertisementBs
{

    private readonly IAdvertisementRepository _advertisementRepository;

    public AdvertisementBs(IAdvertisementRepository advertisementRepository)
    {
        _advertisementRepository = advertisementRepository;
    }

    public async Task<ApiResponse<List<AdvertisementGetDto>>> GetAllAsync()
    {
        var lists = await _advertisementRepository.GetAllAsync();

        if (lists.Count == 0)
        {
            return ApiResponse<List<AdvertisementGetDto>>.Fail(400, "Not Found Advertisements");    
        }
        
        var listDtos = new List<AdvertisementGetDto>();
        foreach (var item in lists)
        {
            listDtos.Add(new AdvertisementGetDto { 
                Id = item.Id,
                Title = item.Title,
                AdvertisementContent = item.AdvertisementContent,
                Date = item.Date,
                Photo = item.Photo
            });
        }
        return ApiResponse<List<AdvertisementGetDto>>.Success(200, listDtos);
    }

    public async Task<ApiResponse<AdvertisementGetDto>> GetbyIdAsync(int id)
    {
        var item = await _advertisementRepository.GetAsync(prd => prd.Id == id);

        if(item == null)
        {
            return ApiResponse<AdvertisementGetDto>.Fail(404, "Girilen id değerine uygun veri bulunmadı");
        }

        var dto = new AdvertisementGetDto
        {
            Id = item.Id,
            Title = item.Title,
            AdvertisementContent = item.AdvertisementContent,
            Date = item.Date,
            Photo = item.Photo
        };
        return ApiResponse<AdvertisementGetDto>.Success(200, dto);
    }

}
