using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Text;

namespace online_shop.Application.Utilities.Security.PasswordHelper
{
    public class PasswordHelper : IPasswordHelper
    {
        public string EncodePassword(string password)
        {
            byte[] salt = Encoding.UTF8.GetBytes("DatingApp");
            //byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                            password: password!,
                            salt: salt,
                            prf: KeyDerivationPrf.HMACSHA256,
                            iterationCount: 100000,
                            numBytesRequested: 256 / 8));
            return hashed;
        }
    }
}
