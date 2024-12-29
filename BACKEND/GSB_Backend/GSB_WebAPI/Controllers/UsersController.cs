using GSB_Business.Interfaces;
using GSB_Model.Dtos.UserandDetail;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : BaseController
{
    private readonly IUserBs _userBs;
    public UsersController(IUserBs userBs)
    {
        _userBs = userBs;   
    }

    [HttpPost("authentication")]
    public async Task<IActionResult> Login([FromBody] UserLoginCheckDto userLoginCheckDto)
    {
        var response = await _userBs.GetUserByUserNameandUserPassword(userLoginCheckDto.UserName, userLoginCheckDto.UserPassword);
        return SendResponse(response);  
    }

    [HttpGet("getAllByRoleId")]
    public async Task<IActionResult> GetAllUserbyRoleId([FromQuery] int roleId)
    {
        var response = await _userBs.GetUsersbyRoleId(roleId);
        return SendResponse(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetbyId([FromQuery] int id)
    {
        var response = await _userBs.GetbyId(id);
        return SendResponse(response);
    }

}
