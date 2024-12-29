using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface IUserDetailRepository : IBaseRepository<UserDetail>
{
    Task<UserDetail> GetByIdAsync(int id);
}
