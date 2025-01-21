using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace mp.Repository.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Genre { get; set; }
        public string? Description { get; set; }
        public int ReleaseYear { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}
