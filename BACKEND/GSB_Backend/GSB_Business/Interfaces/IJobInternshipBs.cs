using GSB_Model.Dtos.JobInternship;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface IJobInternshipBs
{
    Task<ApiResponse<List<JobInternshipGetDto>>> GetAllAsync(int id);
    Task<ApiResponse<JobInternshipGetDto>> GetAsync(int id);
}
