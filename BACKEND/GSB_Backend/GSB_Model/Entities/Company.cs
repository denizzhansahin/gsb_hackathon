using Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace GSB_Model.Entities;

public class Company : IEntity
{
    [Key] public int Id { get; set; }
    public string CompanyName { get; set; }
    public string FullAddress { get; set; }

}
