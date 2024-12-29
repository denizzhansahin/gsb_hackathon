using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class RoleRepository : BaseRepository<Role, GSBDataContext>, IRoleRepository
{
    public async Task<Role> GetAsyncById(int roleId)
    {
        return await GetAsync(role => role.Id == roleId);
    }
}
