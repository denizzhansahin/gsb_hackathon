using GSB_Business.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GSB_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteeringController : BaseController
    {

        private readonly IVolunteeringBs _volunteeringBs;
        public VolunteeringController(IVolunteeringBs volunteeringBs)
        {
            _volunteeringBs = volunteeringBs;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAll([FromQuery] int id)
        {
            var response = await _volunteeringBs.GetAllAsyncWithGrantTypeId(id);
            return SendResponse(response);
        }

        [HttpGet("getById")]
        public async Task<IActionResult> GetbyId([FromQuery] int id)
        {
            var response = await _volunteeringBs.GetbyId(id);
            return SendResponse(response);  
        }

    }
}
