using GSB_Model.Dtos.CategoriesContent;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface ICategoriesContentBs
{
    Task<ApiResponse<List<CategoriesContentGetDto>>> GetAllAsync();
    Task<ApiResponse<CategoriesContentGetDto>> GetAsyncById(int id);
    Task<ApiResponse<List<CategoriesContentGetDto>>> GetAllAsyncwithCategoryId(int categoryId);
}
