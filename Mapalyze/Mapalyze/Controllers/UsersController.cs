using Microsoft.AspNetCore.Mvc;
using Mapalyze.Data;
using Mapalyze.Models;
using System.Linq; // Required for LINQ queries
using System.Threading.Tasks;

namespace Mapalyze.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup(User user) 
        {
            // Check if the username or email already exists in the database
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

            // TODO: Validate other user details if necessary
            // TODO: Hash the password before saving
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { success = true, message = "Signup successful!" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginRequest request)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == request.Username);
            if (user == null)
            {
                return BadRequest(new { success = false, message = "Invalid username or password." });
            }
            
            // TODO: Verify the password hash (this will depend on how you hashed the password during signup)
            // For now, this is just a placeholder:
            if (user.PasswordHash != request.Password) 
            {
                return BadRequest(new { success = false, message = "Invalid username or password." });
            }

            return Ok(new { success = true, message = "Login successful!" });
        }
    }

    public class UserLoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
