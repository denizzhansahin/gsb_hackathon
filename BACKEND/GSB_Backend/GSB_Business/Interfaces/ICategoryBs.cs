using GSB_Model.Dtos.Category;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface ICategoryBs
{
    Task<ApiResponse<List<CategoryGetDto>>> GetAllAsync();
}
