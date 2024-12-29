using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.JobInternship;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class JobInternshipBs : IJobInternshipBs
{

    private readonly IJobInternshipRepository _jobInternshipRepository;
    private readonly ICompanyRepository _companyRepository;
    private readonly IGrantTypeRepository _grantTypeRepository;

    public JobInternshipBs(IJobInternshipRepository jobInternshipRepository, ICompanyRepository companyRepository, IGrantTypeRepository grantTypeRepository)
    {
        _jobInternshipRepository = jobInternshipRepository;
        _companyRepository = companyRepository;
        _grantTypeRepository = grantTypeRepository;

    }

    public async Task<ApiResponse<List<JobInternshipGetDto>>> GetAllAsync(int id)
    {
        var itemLists = await _jobInternshipRepository.GetAllAsync(job => job.GrantTypeId == id);

        if(itemLists.Count == 0)
        {
            return ApiResponse<List<JobInternshipGetDto>>.Fail(404, "Not found JobInternship");
        }

        var listDtos = new List<JobInternshipGetDto>(); 
        foreach (var item in itemLists)
        {
            var company = await _companyRepository.GetAsync(cmp => cmp.Id == item.CompanyId);
            var type = await _grantTypeRepository.GetbyIdAsync(item.GrantTypeId);
            listDtos.Add(new JobInternshipGetDto
            {
                Id = item.Id,
                CompanyName = company.CompanyName,
                FullAddress = company.FullAddress,
                BusinessContent = item.BusinessContent,
                Title = item.Title,
                Deadline = item.Deadline,
                Firstline = item.Firstline,
                GrantType = type.Name
            });
        }
        return ApiResponse<List<JobInternshipGetDto>>.Success(200, listDtos);
    }

    public async Task<ApiResponse<JobInternshipGetDto>> GetAsync(int id)
    {
        var item = await _jobInternshipRepository.GetAsync(job =>  job.Id == id);

        if(item == null)
        {
            return ApiResponse<JobInternshipGetDto>.Fail(404, "Bu id değerine uygun kayıt bulunamadı");
        }
        var company = await _companyRepository.GetAsync(cmp => cmp.Id == item.CompanyId);
        var dto = new JobInternshipGetDto
        {
            Id = item.Id,
            CompanyName = company.CompanyName,
            FullAddress = company.FullAddress,
            BusinessContent = item.BusinessContent,
            Title = item.Title,
            Deadline = item.Deadline,
            Firstline = item.Firstline,
        };
        return ApiResponse<JobInternshipGetDto>.Success(200, dto);
    }

}
