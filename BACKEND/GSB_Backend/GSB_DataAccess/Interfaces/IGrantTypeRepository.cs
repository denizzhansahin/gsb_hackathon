using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface IGrantTypeRepository : IBaseRepository<GrantType>
{
    Task<GrantType> GetbyIdAsync(int id);
}
