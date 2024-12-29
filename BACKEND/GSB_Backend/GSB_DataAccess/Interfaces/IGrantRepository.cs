using GSB_Model.Entities;
using Infrastructure.DataAccess;

namespace GSB_DataAccess.Interfaces;

public interface IGrantRepository : IBaseRepository<Grant>
{
    Task<Grant> GetbyIdAsync(int id);
}
