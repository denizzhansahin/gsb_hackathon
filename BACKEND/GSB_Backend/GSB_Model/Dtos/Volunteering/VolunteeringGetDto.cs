using Infrastructure.Model;

namespace GSB_Model.Dtos.Volunteering;

public class VolunteeringGetDto : IDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string VolunteeringContent { get; set; }
    public string? Conditions { get; set; }
    public DateTime? FirstDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string Period { get; set; }
    public string Type { get; set; }
}
