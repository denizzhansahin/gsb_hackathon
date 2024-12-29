using Infrastructure.Model;

namespace GSB_Model.Dtos.Category;

public class CategoryGetDto : IDto
{
    public int Id { get; set; }
    public string CategoryName { get; set; }

}
