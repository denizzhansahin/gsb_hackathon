using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesContentsController : BaseController
{
    private readonly ICategoriesContentBs _categoriesContentBs;
    public CategoriesContentsController(ICategoriesContentBs categoriesContentBs)
    {
        _categoriesContentBs = categoriesContentBs;
    }

    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
        var response = await _categoriesContentBs.GetAllAsync();
        return SendResponse(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetbyId([FromQuery] int id)
    {
        var response = await _categoriesContentBs.GetAsyncById(id);
        return SendResponse(response);
    }

    [HttpGet("getAllByCategoryId")]
    public async Task<IActionResult> GetAllbyCategoryId([FromQuery] int categoryId)
    {
        var response = await _categoriesContentBs.GetAllAsyncwithCategoryId(categoryId);
        return SendResponse(response);
    }

}
