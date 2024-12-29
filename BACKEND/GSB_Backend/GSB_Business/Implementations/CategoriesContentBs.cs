using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.CategoriesContent;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class CategoriesContentBs : ICategoriesContentBs
{

    private readonly ICategoriesContentRepository _categoriesContentRepository;
    private readonly IUserRepository _userRepository;
    private readonly ICategoryRepository _categoryRepository;

    public CategoriesContentBs(ICategoriesContentRepository categoriesContentRepository, IUserRepository userRepository, ICategoryRepository categoryRepository)
    {
        _categoriesContentRepository = categoriesContentRepository;
        _userRepository = userRepository;
        _categoryRepository = categoryRepository;
    }

    public async Task<ApiResponse<List<CategoriesContentGetDto>>> GetAllAsync()
    {
        var lists = await _categoriesContentRepository.GetAllAsync();

        if (lists.Count == 0)
        {
            return ApiResponse<List<CategoriesContentGetDto>>.Fail(400, "Not Found CategoriesContents");
        }

        var listDtos = new List<CategoriesContentGetDto>();
        foreach (var item in lists)
        {
            var user = await _userRepository.GetAsync(user => user.Id == item.UserId);
            var category = await _categoryRepository.GetAsync(ctg => ctg.Id == item.CategoryId);
            listDtos.Add(new CategoriesContentGetDto
            {
                Id = item.Id,
                Title = item.Title,
                SecondTitle = item.SecondTitle,
                PageContent = item.PageContent,
                Photo = item.Photo,
                RegisterDate = item.RegisterDate,
                UserName = user.Name,
                UserSurname = user.Surname,
                CategoryName = category.CategoryName
            });
        }
        return ApiResponse<List<CategoriesContentGetDto>>.Success(200, listDtos);
    }

    public async Task<ApiResponse<CategoriesContentGetDto>> GetAsyncById(int id)
    {
        var item = await _categoriesContentRepository.GetAsyncById(id);
        if (item == null)
        {
            return ApiResponse<CategoriesContentGetDto>.Fail(400, "Not found by id CategoriesContent");
        }
        var user = await _userRepository.GetAsync(user => user.Id == item.UserId);
        var category = await _categoryRepository.GetAsync(ctg => ctg.Id==item.CategoryId);
        var itemDto = new CategoriesContentGetDto
        {
            Id = item.Id,
            Title = item.Title,
            PageContent = item.PageContent,
            Photo = item.Photo,
            RegisterDate = item.RegisterDate,
            UserName = user.Name,
            UserSurname = user.Surname,
            CategoryName = category.CategoryName
        };
        return ApiResponse<CategoriesContentGetDto>.Success(200, itemDto);
    }

    public async Task<ApiResponse<List<CategoriesContentGetDto>>> GetAllAsyncwithCategoryId(int categoryId)
    {
        var itemList = await _categoriesContentRepository.GetAllAsyncwithCategoryId(categoryId);

        if (itemList.Count == 0)
        {
            return ApiResponse<List<CategoriesContentGetDto>>.Fail(404, "Not found CategoriesContent");
        }

        var dtoList = new List<CategoriesContentGetDto>();  
        foreach (var item in itemList)
        {
            var user = await _userRepository.GetAsync(user => user.Id == item.UserId);
            var category = await _categoryRepository.GetAsync(ctg => ctg.Id == item.CategoryId);
            dtoList.Add(new CategoriesContentGetDto
            {
                Id = item.Id,
                Title = item.Title,
                SecondTitle = item.SecondTitle,
                PageContent = item.PageContent,
                Photo = item.Photo,
                RegisterDate = item.RegisterDate,
                UserName = user.Name,
                UserSurname = user.Surname,
                CategoryName = category.CategoryName
            });
        }
        return ApiResponse<List<CategoriesContentGetDto>>.Success(200, dtoList);
    }

}
