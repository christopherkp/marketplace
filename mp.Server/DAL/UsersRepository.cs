using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mp.Server.Shared;
using mp.Server.Shared.Utilities;
using mp.Repository.Models;

namespace mp.Server.DAL
{
    internal class UsersRepository : IUsersRepository
    {
        private readonly MarketplaceDbContext _context;
        public UsersRepository(IDbContextFactory<MarketplaceDbContext> context)
        {
            _context = context.CreateDbContext();
        }

        public async Task<IEnumerable<UserDto>> GetUsers()
        {
            var items = await _context.Items
                             .Select(b => new ItemDto
                             {
                                 Id = b.Id,
                                 Name = b.Name,
                                 Genre = b.Genre,
                                 Description = b.Description,
                                 ReleaseYear = b.ReleaseYear,
                                 UserId = b.User.UserId,
                                 Username = b.User.Username
                             }).ToListAsync();

            var results = await _context.Users
                          .Select(t => new UserDto
                          {
                              Id = t.Id,
                              UserId = t.UserId,
                              Username = t.Username,
                              UserItems = Helpers.GetUserItems(t.UserId, items),
                          }).ToListAsync();
            return results;
        }

        public async Task<UserDto> GetUser(int id)
        {
            var items = await _context.Items
                         .Select(b => new ItemDto
                         {
                             Id = b.Id,
                             Name = b.Name,
                             Genre = b.Genre,
                             Description = b.Description,
                             ReleaseYear = b.ReleaseYear,
                             UserId = b.User.UserId,
                             Username = b.User.Username
                         }).ToListAsync();

            var user = from b in _context.Users
                       select new UserDto()
                       {
                           Id = b.Id,
                           UserId = b.UserId,
                           Username = b.Username,
                           UserItems = Helpers.GetUserItems(b.UserId, items),
                       };
            var result = await user.FirstOrDefaultAsync(i => i.UserId == id);

            return result;
        }
    }
}
