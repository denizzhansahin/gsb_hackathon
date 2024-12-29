using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdvertisementsController : BaseController
{
    private readonly IAdvertisementBs _advertisementBs;
    public AdvertisementsController(IAdvertisementBs advertisementBs)
    {
        _advertisementBs = advertisementBs;
    }

    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll()
    {
        var response = await _advertisementBs.GetAllAsync();
        return SendResponse(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetbyId([FromQuery] int id)
    {
        var response = await _advertisementBs.GetbyIdAsync(id);
        return SendResponse(response);  
    }

} 
