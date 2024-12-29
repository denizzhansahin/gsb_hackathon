using GSB_Model.Dtos.UserandDetail;
using Infrastructure.HttpResponse;

namespace GSB_Business.Interfaces;

public interface IUserBs
{
    Task<ApiResponse<UserandDetailGetDto>> GetUserByUserNameandUserPassword(string userName, string password);
    Task<ApiResponse<List<UserandDetailGetDto>>> GetUsersbyRoleId(int roleId);
    Task<ApiResponse<UserandDetailGetDto>> GetbyId(int id);
}
