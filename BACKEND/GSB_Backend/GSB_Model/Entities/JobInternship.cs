using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class JobInternship : IEntity
{
    [Key] public int Id { get; set; }
    public int CompanyId { get; set; }
    public string? BusinessContent { get; set; }
    public bool IsActive { get; set; }


    public string? Title { get; set; }
    public DateTime? Deadline { get; set; }
    public DateTime? Firstline { get; set; }
    public int GrantTypeId { get; set; }
}
