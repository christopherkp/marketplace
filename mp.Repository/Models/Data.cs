using Humanizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Runtime.Intrinsics.X86;

namespace mp.Repository.Models;

public static class Data
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new MarketplaceDbContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<MarketplaceDbContext>>()))

        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
            var users = new List<User>
     {
        new User { UserId = 1, Username = "TestUser1", Email = "testemail", Password = "testpassword"},
        new User { UserId = 2, Username = "TestUser2" },
        new User { UserId = 3, Username = "TestUser3" },
        new User { UserId = 4, Username = "TestUser4" },
        new User { UserId = 5, Username = "TestUser5", },
    };
            users.ForEach(t => context.Users.Add(t));
            context.SaveChanges();


            var items = new List<Item>
    {
        new Item { Name = "Table",  Genre = "Home", Description ="Table one can have in their home. Made out of wood and glass. It is not new, but has been rarely used.", ReleaseYear = 2000, UserId = 1 },
        new Item { Name = "Chair",  Genre = "Kitchen", Description ="Chair for the kitchen.", ReleaseYear = 2001, UserId = 2 },
        new Item { Name = "Fake plant",  Genre = "Outdoors", Description ="", ReleaseYear = 2002, UserId = 3 },
        new Item { Name = "Sofa",  Genre = "Home", Description ="This is a comfortable sofa one can have in their home. It is new.", ReleaseYear = 2002, UserId = 1},
        new Item { Name = "Example Item1",  Genre = "Example Genre1", Description ="", ReleaseYear = 2002, UserId = 2 },
        new Item { Name = "Example Item2",  Genre = "Example Genre2", Description ="", ReleaseYear = 2003, UserId = 3 },
        new Item { Name = "Example Item3",  Genre = "Example Genre3", Description ="", ReleaseYear = 2004, UserId = 4 },
        new Item { Name = "Example Item4",  Genre = "Example Genre4", Description ="", ReleaseYear = 2005, UserId = 5 },
        new Item { Name = "Example Item5",  Genre = "Example Genre5", Description ="", ReleaseYear = 2006, UserId = 2 },
        new Item { Name = "Example Item6",  Genre = "Example Genre6", Description ="", ReleaseYear = 2007, UserId = 3 },
        new Item { Name = "Example Item7",  Genre = "Example Genre7", Description ="", ReleaseYear = 2008, UserId = 4 },
        new Item { Name = "Example Item8",  Genre = "Example Genre8", Description ="", ReleaseYear = 2009, UserId =  5},
        new Item { Name = "Example Item9",  Genre = "Example Genre9", Description ="", ReleaseYear = 2010, UserId =  2},
        new Item { Name = "Example Item10",  Genre = "Example Genre10", Description ="", ReleaseYear = 2011, UserId =  3},
        new Item { Name = "Example Item11",  Genre = "Example Genre11", Description ="", ReleaseYear = 2012, UserId =  4},
        new Item { Name = "Example Item12",  Genre = "Example Genre12", Description ="", ReleaseYear = 2013, UserId =  5},
        new Item { Name = "Example Item13",  Genre = "Example Genre13", Description ="", ReleaseYear = 2014, UserId =  2},
        new Item { Name = "Example Item14",  Genre = "Example Genre14", Description ="", ReleaseYear = 2015, UserId =  3},
        new Item { Name = "Example Item15",  Genre = "Example Genre15", Description ="", ReleaseYear = 2016, UserId =  4},
        new Item { Name = "Example Item16",  Genre = "Example Genre16", Description ="", ReleaseYear = 2017, UserId =  5},
        new Item { Name = "Example Item17",  Genre = "Example Genre17", Description ="", ReleaseYear = 2018, UserId =  2},
        new Item { Name = "Example Item18",  Genre = "Example Genre18", Description ="", ReleaseYear = 2019, UserId =  3},
        new Item { Name = "Example Item19",  Genre = "Example Genre19", Description ="", ReleaseYear = 2020, UserId =  4},
    };
            items.ForEach(t => context.Items.Add(t));

            context.SaveChanges();
        }
    }
}