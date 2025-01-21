using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mp.Server.DAL;
using mp.Server.Shared;

namespace mp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsRepository _IItemsRepository;
        public ItemsController(IItemsRepository IItemsRepository)
        {
            _IItemsRepository = IItemsRepository;
        }

    
        // GET: api/Items
        [HttpGet]
        public async Task<IEnumerable<ItemDto>> GetItems()
        {
            return await _IItemsRepository.GetItems();
        }

        // GET: api/Items/1
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemDto>> GetItem(int id)
        {
            return await _IItemsRepository.GetItem(id);
        }
        
        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ItemDto>> DeleteItem(int id)
        {
            return await _IItemsRepository.DeleteItem(id);
        }

    }

}
