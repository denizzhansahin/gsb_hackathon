using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class GrantTypeRepository : BaseRepository<GrantType, GSBDataContext>, IGrantTypeRepository
{
    public async Task<GrantType> GetbyIdAsync(int id)
    {
        return await  GetAsync(grt => grt.Id == id);
    }
}
