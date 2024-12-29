using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class GrantRepository : BaseRepository<Grant, GSBDataContext>, IGrantRepository
{
    public async Task<Grant> GetbyIdAsync(int id)
    {
        return await GetAsync(grant => grant.Id == id); 
    }
}
