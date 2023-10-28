using Microsoft.EntityFrameworkCore;
using Mapalyze.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add CORS if necessary
builder.Services.AddCors();

// Add DbContext configuration here
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios.
    app.UseHsts();
}

app.UseHttpsRedirection();

// If you added CORS
// For development purposes, use a permissive policy. Revert to a secure one for production.
if (app.Environment.IsDevelopment())
{
    app.UseCors(policy => 
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
}
else
{
    // Use this in production
    app.UseCors(policy => 
        policy.WithOrigins("http://localhost:44463")
              .AllowAnyMethod()
              .AllowAnyHeader());
}

app.UseStaticFiles();
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapFallbackToFile("index.html");

app.Run();
