using Infrastructure.Model;

namespace GSB_Model.Dtos.JobInternship;

public class JobInternshipGetDto : IDto
{
    public int Id { get; set; }
    public string CompanyName { get; set; }
    public string FullAddress { get; set; }
    public string BusinessContent { get; set; }
    public string? Title { get; set; }
    public DateTime? Deadline { get; set; }
    public DateTime? Firstline { get; set; }
    public string GrantType { get; set; }
}
