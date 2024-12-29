using Infrastructure.Model;

namespace GSB_Model.Dtos.UserandDetail;

public class UserandDetailGetDto : IDto
{
    public int Id { get; set; }
    public string? UserName { get; set; }
    public string? UserSurname { get; set; }
    public string? IdentityNo { get; set; }
    public string? Phone { get; set; }
    public string? Gmail { get; set; }
    public string? FullAddress { get; set; }
    public int Age { get; set; }
    public string? Photo { get; set; }
    public string RoleName { get; set; }
}
