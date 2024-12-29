using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class Advertisement : IEntity
{
    [Key] public int Id { get; set; }
    public string Title { get; set; }   
    public string AdvertisementContent { get; set; }
    public DateTime? Date { get; set; }
    public string? Photo { get; set; }
    public bool IsActive { get; set; }
}
