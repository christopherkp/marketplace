using mp.Server.Shared;

namespace mp.Server.DAL
{
    public interface IItemsRepository
    {
        Task<IEnumerable<ItemDto>> GetItems();
        Task<ItemDto> GetItem(int id);
        Task<ItemDto> DeleteItem(int id);
    }
}
