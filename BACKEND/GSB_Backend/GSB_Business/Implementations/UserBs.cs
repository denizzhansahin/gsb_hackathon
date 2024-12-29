using GSB_Business.Interfaces;
using GSB_DataAccess.Interfaces;
using GSB_Model.Dtos.UserandDetail;
using Infrastructure.HttpResponse;

namespace GSB_Business.Implementations;

public class UserBs : IUserBs
{
    private readonly IUserRepository _userRepository;
    private readonly IUserDetailRepository _userDetailRepository;
    private readonly IRoleRepository _roleRepository;

    public UserBs(IUserRepository userRepository, IUserDetailRepository userDetailRepository, IRoleRepository roleRepository)
    {
        _userDetailRepository = userDetailRepository;
        _userRepository = userRepository;
        _roleRepository = roleRepository;

    }

    public async Task<ApiResponse<UserandDetailGetDto>> GetUserByUserNameandUserPassword(string userName, string password)
    {
        var user = await _userRepository.GetAsynwithUserNameandPassword(userName, password);
        if(user == null)
        {
            return ApiResponse<UserandDetailGetDto>.Fail(404, "Kullanıcı adı veya şifre hatalı.");
        }
        var userDetail = await _userDetailRepository.GetByIdAsync(user.Id);
        var role = await _roleRepository.GetAsyncById(user.RoleId);
        var itemDto = new UserandDetailGetDto()
        {
            Id = user.Id,   
            UserName = user.Name,
            UserSurname = user.Surname,
            IdentityNo = userDetail.IdentityNo,
            Phone = userDetail.Phone,
            Gmail = userDetail.Gmail,
            FullAddress = userDetail.FullAddress,
            Age = userDetail.Age,
            Photo = userDetail.Photo,
            RoleName = role.Name,
            
        };
        return ApiResponse<UserandDetailGetDto>.Success(200, itemDto);

    }

    public async Task<ApiResponse<List<UserandDetailGetDto>>> GetUsersbyRoleId(int roleId)
    {
        var itemLists = await _userRepository.GetAllAsync(user => user.RoleId == roleId);

        if (itemLists.Count == 0)
        {
            return ApiResponse<List<UserandDetailGetDto>>.Fail(404, "Not found Users");
        }
        var dtoList = new List<UserandDetailGetDto>();
        foreach (var item in itemLists)
        {
            var userDetail = await _userDetailRepository.GetByIdAsync(item.Id);
            var role = await _roleRepository.GetAsyncById(item.RoleId);
            dtoList.Add(new UserandDetailGetDto()
            {
                Id = item.Id,
                UserName = item.Name,
                UserSurname = item.Surname,
                IdentityNo = userDetail.IdentityNo,
                Phone = userDetail.Phone,
                Gmail = userDetail.Gmail,
                FullAddress = userDetail.FullAddress,
                Age = userDetail.Age,
                Photo = userDetail.Photo,
                RoleName = role.Name,

            });
        }
        return ApiResponse<List<UserandDetailGetDto>>.Success(200, dtoList);
    }

    public async Task<ApiResponse<UserandDetailGetDto>> GetbyId(int id)
    {
        var user = await _userRepository.GetAsync(user => user.Id == id);
        if (user == null)
        {
            return ApiResponse<UserandDetailGetDto>.Fail(404, "Girilen id değerine göre kullanıcı bulunamadı.");
        }
        var userDetail = await _userDetailRepository.GetByIdAsync(user.Id);
        var role = await _roleRepository.GetAsyncById(user.RoleId);
        var itemDto = new UserandDetailGetDto()
        {
            Id = user.Id,
            UserName = user.Name,
            UserSurname = user.Surname,
            IdentityNo = userDetail.IdentityNo,
            Phone = userDetail.Phone,
            Gmail = userDetail.Gmail,
            FullAddress = userDetail.FullAddress,
            Age = userDetail.Age,
            Photo = userDetail.Photo,
            RoleName = role.Name,

        };
        return ApiResponse<UserandDetailGetDto>.Success(200, itemDto);
    }

}
