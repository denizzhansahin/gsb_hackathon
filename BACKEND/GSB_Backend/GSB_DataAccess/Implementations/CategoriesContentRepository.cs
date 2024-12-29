using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class CategoriesContentRepository : BaseRepository<CategoriesContent, GSBDataContext>, ICategoriesContentRepository
{
    public async Task<CategoriesContent> GetAsyncById(int id)
    {
        return await GetAsync(ctg => ctg.Id == id);
    }

    public async Task<List<CategoriesContent>> GetAllAsyncwithCategoryId(int categoryId)
    {
        return await GetAllAsync(ctg => ctg.CategoryId == categoryId);
    }
}
