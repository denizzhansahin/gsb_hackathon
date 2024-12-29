using Infrastructure.Model;

namespace GSB_Model.Dtos.Advertisement;

public class AdvertisementGetDto : IDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string AdvertisementContent { get; set; }
    public DateTime? Date { get; set; }
    public string? Photo { get; set; }
}
