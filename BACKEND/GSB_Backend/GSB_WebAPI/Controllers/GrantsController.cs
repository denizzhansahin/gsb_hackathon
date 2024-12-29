using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GrantsController : BaseController
{
    private readonly IGrantBs _grantBs;
    public GrantsController(IGrantBs grantBs)
    {
        _grantBs = grantBs;
    }

    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
        var response = await _grantBs.GetAllAsync();
        return SendResponse(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetbyId([FromQuery] int id)
    {
        var response = await _grantBs.GetAsync(id);
        return SendResponse(response);
    }

}
