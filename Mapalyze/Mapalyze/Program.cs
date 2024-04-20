using Microsoft.EntityFrameworkCore;
using Mapalyze.Data;

// Create a new instance of the web application builder
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// This registers services required for MVC (Model-View-Controller) pattern
builder.Services.AddControllersWithViews();

// Add CORS (Cross-Origin Resource Sharing) service if necessary
builder.Services.AddCors();

// Add Entity Framework Core DbContext configuration here
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Build the application
var app = builder.Build();

// Configure the HTTP request pipeline.

// Check if the application environment is not development
if (!app.Environment.IsDevelopment())
{
    // If not in development, use HTTP Strict Transport Security (HSTS)
    // The default HSTS value is 30 days. You may want to change this for production scenarios.
    app.UseHsts();
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// If CORS is added
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
    // Use a more restrictive CORS policy in production, allowing requests only from specific origins
    app.UseCors(policy => 
        policy.WithOrigins("http://localhost:44463")
              .AllowAnyMethod()
              .AllowAnyHeader());
}

// Serve static files
app.UseStaticFiles();

// Enable routing
app.UseRouting();

// Map controllers
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

// Map fallback route to serve index.html for SPA (Single Page Application)
app.MapFallbackToFile("index.html");

// Run the application
app.Run();
