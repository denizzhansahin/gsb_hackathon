using Infrastructure.Model;

namespace GSB_Model.Entities;

public class Volunteering : IEntity
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string VolunteeringContent { get; set; }
    public string? Conditions { get; set; }
    public DateTime? FirstDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string Period { get; set; }
    public int GrantTypeId { get; set; }
}
