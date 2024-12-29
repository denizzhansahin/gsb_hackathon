using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class UserDetailRepository : BaseRepository<UserDetail, GSBDataContext>, IUserDetailRepository
{
    public async Task<UserDetail> GetByIdAsync(int id)
    {
        return await GetAsync(usd => usd.Id == id);
    }
}
