using mp.Server.Shared;

namespace mp.Server.DAL
{
    public interface IUsersRepository
    {
        Task<IEnumerable<UserDto>> GetUsers();
        Task<UserDto> GetUser(int id);
    }
}
