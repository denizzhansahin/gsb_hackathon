using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class UserDetail : IEntity
{
    [Key] public int Id { get; set; }
    public string? IdentityNo { get; set; }
    public string? Phone { get; set; }
    public string? Gmail { get; set; }
    public string? FullAddress { get; set; }
    public int Age { get; set; }
    public string? Photo { get; set; }
    public bool IsActive { get; set; }
}
