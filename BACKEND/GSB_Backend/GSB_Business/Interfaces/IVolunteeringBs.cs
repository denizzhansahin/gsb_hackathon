using GSB_Model.Dtos.Volunteering;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface IVolunteeringBs
{
    Task<ApiResponse<List<VolunteeringGetDto>>> GetAllAsyncWithGrantTypeId(int id);
    Task<ApiResponse<VolunteeringGetDto>> GetbyId(int id);
}
