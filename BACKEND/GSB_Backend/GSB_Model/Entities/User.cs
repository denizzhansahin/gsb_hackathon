using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class User : IEntity
{
    [Key]public int Id { get; set; }
    public string? Name { get; set; }
    public string? Surname { get; set; }
    public int UserDetailId { get; set; }
    public int RoleId { get; set; }
    public string? UserName { get; set; }
    public string? UserPassword { get; set; }
}
