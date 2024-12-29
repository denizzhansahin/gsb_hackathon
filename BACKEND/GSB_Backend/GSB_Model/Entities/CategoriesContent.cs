using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class CategoriesContent : IEntity
{
    [Key] public int Id { get; set; }
    public string? Title { get; set; }
    public string? SecondTitle { get; set; }
    public string? PageContent { get; set; }
    public string? Photo { get; set; }
    public int UserId { get; set; }
    public DateTime? RegisterDate { get; set; }
    public bool IsActive { get; set; }
    public int CategoryId { get; set; }
}
