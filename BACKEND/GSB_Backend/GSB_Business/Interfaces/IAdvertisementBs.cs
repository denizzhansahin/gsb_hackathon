using GSB_Model.Dtos.Advertisement;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface IAdvertisementBs
{
    Task<ApiResponse<List<AdvertisementGetDto>>> GetAllAsync();
    Task<ApiResponse<AdvertisementGetDto>> GetbyIdAsync(int id);
}
