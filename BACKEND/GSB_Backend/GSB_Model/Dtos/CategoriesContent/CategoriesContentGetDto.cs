using Infrastructure.Model;

namespace GSB_Model.Dtos.CategoriesContent;

public class CategoriesContentGetDto : IDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string SecondTitle { get; set; }
    public string PageContent { get; set; }
    public string Photo { get; set; }
    public DateTime? RegisterDate { get; set; }
    public string UserName { get; set; }
    public string UserSurname { get; set; }
    public string CategoryName { get; set; }
}
