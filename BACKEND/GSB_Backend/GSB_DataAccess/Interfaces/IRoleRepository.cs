using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface IRoleRepository : IBaseRepository<Role>
{
    Task<Role> GetAsyncById(int roleId);    
}
