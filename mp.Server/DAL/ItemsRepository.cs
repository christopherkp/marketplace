using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mp.Server.Shared;
using mp.Repository.Models;

namespace mp.Server.DAL
{
    internal class ItemsRepository : IItemsRepository
    {
        private readonly MarketplaceDbContext _context;
        public ItemsRepository(IDbContextFactory<MarketplaceDbContext> context)
        {
            _context = context.CreateDbContext();
        }

        public async Task<IEnumerable<ItemDto>> GetItems()
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
            return items;
        }

        public async Task<ItemDto> GetItem(int id)
        {
            var item = await _context.Items
                       .Select(b => new ItemDto()
                       {
                           Id = b.Id,
                           Name = b.Name,
                           Genre = b.Genre,
                           Description = b.Description,
                           ReleaseYear = b.ReleaseYear,
                           UserId = b.User.UserId,
                           Username = b.User.Username
                       }).FirstOrDefaultAsync(i => i.Id == id);

            if (item != null)
            {
                return item;
            }

            return new ItemDto();
        }

        public async Task<ItemDto> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item != null)
            {
                _context.Items.Remove(item);
                await _context.SaveChangesAsync();
            }
            return new ItemDto();
        }

        /*
        private bool ItemExists(int id)
        {
            return _context.Items.Any(e => e.Id == id);
        }
        */
    }
}
