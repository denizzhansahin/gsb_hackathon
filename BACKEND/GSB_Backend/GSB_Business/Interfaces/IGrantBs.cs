using GSB_Model.Dtos.Grant;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface IGrantBs
{
    Task<ApiResponse<List<GrantGetDto>>> GetAllAsync();
    Task<ApiResponse<GrantGetDto>> GetAsync(int id);
}
