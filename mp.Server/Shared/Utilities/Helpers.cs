using Microsoft.EntityFrameworkCore;
using mp.Repository.Models;

namespace mp.Server.Shared.Utilities
{
    public class Helpers
    {
        public static List<ItemDto> GetUserItems(int id, List<ItemDto> items)
        {
            var result = new List<ItemDto>();
            foreach (var item in items)
            {
                if (item.UserId == id)
                {
                    result.Add(item);
                }
            }
            return result;
        }

        /* public static IQueryable<Item> GetItems()
         {
             var items = from b in _context.Items
                         select new ItemDTO()
                         {
                             Id = b.Id,
                             Name = b.Name,
                             Genre = b.Genre,
                             Description = b.Description,
                             ReleaseYear = b.ReleaseYear,
                             UserId = b.User.UserId,
                             Username = b.User.Username
                         };
             return items;
         }
        */
    }
}
