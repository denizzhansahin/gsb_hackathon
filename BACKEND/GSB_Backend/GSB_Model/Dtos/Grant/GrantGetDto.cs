namespace GSB_Model.Dtos.Grant;

public class GrantGetDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string GrantContent { get; set; }
    public string Period { get; set; }
    public DateTime? Deadline { get; set; }
    public DateTime? Firstline { get; set; }
    public string WhoCanApplyContent { get; set; }
    public string StageArray { get; set; } // koşullar dizisi tablodan çekilip gösterilecek
    public string GrantType { get; set; }
}
