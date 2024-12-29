using GSB_DataAccess.Context;
using GSB_DataAccess.Interfaces;
using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Implementations;

public class UserRepository : BaseRepository<User, GSBDataContext>, IUserRepository
{
    public async Task<User> GetAsynwithUserNameandPassword(string UserName, string UserPassword)
    {
        return await GetAsync(user => user.UserName == UserName && user.UserPassword == UserPassword);
    }

    public async Task<List<User>> GetAllUserByRoleId(int roleId)
    {
        return await GetAllAsync(user => user.RoleId == roleId);
    }

}
