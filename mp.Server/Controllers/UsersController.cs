using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mp.Server.DAL;
using mp.Server.Shared;
//using System.Web.Http;

namespace mp.Server.Controllers
{


    [Route("api/[controller]")]
	[ApiController]

	public class UsersController : ControllerBase
	{
        private readonly IUsersRepository _IUsersRepository;

        public UsersController(IUsersRepository IUsersRepository)
        {
            _IUsersRepository = IUsersRepository;
        }

        // GET: api/Users
        [HttpGet]
		public async Task<IEnumerable<UserDto>> GetUsers()
		{
            return await _IUsersRepository.GetUsers();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
		public async Task<ActionResult<UserDto>> GetUser(int id)
		{
            return await _IUsersRepository.GetUser(id);

        }
       
    }
}
