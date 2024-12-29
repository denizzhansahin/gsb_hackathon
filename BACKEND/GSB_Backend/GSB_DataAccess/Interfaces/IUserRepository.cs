using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface IUserRepository : IBaseRepository<User>
{
    Task<User> GetAsynwithUserNameandPassword(string UserName, string UserPassword);
    Task<List<User>> GetAllUserByRoleId(int roleId);
}
