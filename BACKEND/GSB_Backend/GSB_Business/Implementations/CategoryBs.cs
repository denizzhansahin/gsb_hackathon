using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.Category;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class CategoryBs : ICategoryBs
{

    private readonly ICategoryRepository _categoryRepository;

    public CategoryBs(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public async Task<ApiResponse<List<CategoryGetDto>>> GetAllAsync()
    {
        var itemList = await _categoryRepository.GetAllAsync();

        if (itemList.Count == 0)
        {
            return ApiResponse<List<CategoryGetDto>>.Fail(400, "Not Found Categories");
        }

        var listDtos = new List<CategoryGetDto>();
        foreach (var item in itemList)
        {
            listDtos.Add(new CategoryGetDto { 
                Id = item.Id,
                CategoryName = item.CategoryName
            });
        }
        return ApiResponse<List<CategoryGetDto>>.Success(200, listDtos);
    }
}
