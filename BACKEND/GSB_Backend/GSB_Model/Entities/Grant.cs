using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class Grant : IEntity
{
    [Key] public int Id { get; set; }
    public string Title { get; set; }
    public string GrantContent { get; set; }
    public string? Period { get; set; }
    public DateTime? Deadline { get; set; }
    public DateTime? Firstline { get; set; }
    public string? WhoCanApplyContent { get; set; }
    public string? StageArray { get; set; }
    public bool IsActive { get; set; }
    public int GrantTypeId { get; set; }
}
