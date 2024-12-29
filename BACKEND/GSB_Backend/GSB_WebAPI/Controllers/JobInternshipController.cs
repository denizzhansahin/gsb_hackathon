using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class JobInternshipController : BaseController
{
    private readonly IJobInternshipBs _jobInternshipBs;
    public JobInternshipController(IJobInternshipBs jobInternshipBs)
    {
        _jobInternshipBs = jobInternshipBs;
    }

    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll([FromQuery] int id)
    {
        var response = await _jobInternshipBs.GetAllAsync(id);
        return SendResponse(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetbyId([FromQuery] int id)
    {
        var response = await _jobInternshipBs.GetAsync(id);
        return SendResponse(response);
    }

}
