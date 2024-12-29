using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : BaseController
{
    private readonly ICategoryBs _categoryBs;
    public CategoriesController(ICategoryBs categoryBs)
    {
        _categoryBs = categoryBs;
    }

    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
        var response = await _categoryBs.GetAllAsync();
        return SendResponse(response);
    }
}
