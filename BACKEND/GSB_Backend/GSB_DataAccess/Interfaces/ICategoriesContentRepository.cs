using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface ICategoriesContentRepository : IBaseRepository<CategoriesContent>
{
    Task<CategoriesContent> GetAsyncById(int id);
    Task<List<CategoriesContent>> GetAllAsyncwithCategoryId(int categoryId);
}
