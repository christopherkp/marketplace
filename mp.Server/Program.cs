using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.Json;
using mp.Server.DAL;
using mp.Server.Shared;
using mp.Repository.Models;
using System.Text.Json.Serialization;
using System.Diagnostics;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
        /*.AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        })*/;

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DbContext / Factory
builder.Services.AddDbContextFactory<MarketplaceDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ItemContext") ?? throw new InvalidOperationException("Connection string 'ItemContext' not found.")));

builder.Services.AddTransient<IItemsRepository, ItemsRepository>();
builder.Services.AddTransient<IUsersRepository, UsersRepository>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    Data.Initialize(services);
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
