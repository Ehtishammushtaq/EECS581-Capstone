using System;

namespace Mapalyze.Models
{
    // Represents a user entity within the Mapalyze application.
    public class User
    {
        // Unique identifier for the user. Typically set by the database.
        public int Id { get; set; }

        // Username used by the user for login and display purposes.
        public string Username { get; set; }

        // Email address of the user. Used for account verification and communications.
        public string Email { get; set; }

        // Hash of the user's password. Hashing ensures password security by not storing the actual password.
        public string PasswordHash { get; set; }
    }
}
