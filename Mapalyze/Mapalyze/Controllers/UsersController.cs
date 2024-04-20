using Microsoft.AspNetCore.Mvc;
using Mapalyze.Data;
using Mapalyze.Models;
using System.Linq; // Required for LINQ queries
using System.Threading.Tasks;

namespace Mapalyze.Controllers
{
    // Define the route for this controller which adheres to the 'api/[controller]' template.
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        // Constructor injecting the ApplicationDbContext dependency.
        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST api/users/signup
        // Endpoint for user registration.
        [HttpPost("signup")]
        public async Task<IActionResult> Signup(User user) 
        {
            // Check if the username or email already exists to prevent duplicates.
            var existingUserByUsername = _context.Users.FirstOrDefault(u => u.Username == user.Username);
            var existingUserByEmail = _context.Users.FirstOrDefault(u => u.Email == user.Email);
            
            if (existingUserByUsername != null)
            {
                return BadRequest(new { success = false, message = "Username already exists." });
            }
            
            if (existingUserByEmail != null)
            {
                return BadRequest(new { success = false, message = "Email already registered." });
            }

            // Additional user details validation can be added here.
            // Hash the password before storing it for security.
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Signup successful!" });
        }

        // POST api/users/login
        // Endpoint for user login.
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginRequest request)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == request.Username);
            if (user == null)
            {
                return BadRequest(new { success = false, message = "Invalid username or password." });
            }
            
            // Password verification should be done here using a secure hash comparison.
            // This is a placeholder check:
            if (user.PasswordHash != request.Password) 
            {
                return BadRequest(new { success = false, message = "Invalid username or password." });
            }

            return Ok(new { success = true, message = "Login successful!" });
        }
    }

    // A simple class to handle login requests.
    public class UserLoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
