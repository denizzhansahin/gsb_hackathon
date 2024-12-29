using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class Category : IEntity
{
    [Key] public int Id { get; set; }
    public string CategoryName { get; set; }
    public bool IsActive { get; set; }
}
