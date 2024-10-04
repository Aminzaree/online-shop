using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using online_shop.API.Models;
using online_shop.API.Services.Interface;
using online_shop.Domain.User;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace online_shop.API.Services.Implementation
{
    public class TokenServices : ITokenServices
    {
        private readonly JWTConfi _jWTConfi;

        public TokenServices(JWTConfi jWTConfi)
        {
            _jWTConfi = jWTConfi;
        }

        public string CreateToken(User user)
        {
            //var roles = new List<Claim>();

            //var userRole = _dbSwaggerContext.UserRoles
            // .Where(ur => ur.UserId == user.id)
            // .Include(i => i.Role)
            // .ToList();

            //var rolePermission = _dbSwaggerContext.UserRoles.Where(ur => ur.UserId == user.id)
            //    .Include(i => i.Role)
            //    .ThenInclude(ti => ti.RolePermissions)
            //    .ThenInclude(i => i.Permission)
            //    .SelectMany(s => s.Role.RolePermissions.Select(s => s.Permission.PermissionId))
            //    .ToList();
            //var permissionClaimsJson = JsonConvert.SerializeObject(rolePermission);

            //foreach (var item in userRole)
            //{
            //    roles.Add(new Claim(ClaimTypes.Role, item.Role.Name));
            //}

            var claims = new List<Claim>()
            {
                 new Claim(ClaimTypes.Name,user.UserName),
                 new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
                 new Claim(ClaimTypes.Email,user.Email)
            };

            var symmetricSecurityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_jWTConfi.Key));
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, algorithm: SecurityAlgorithms.HmacSha256);
            var jwtSecurityToken = new JwtSecurityToken(
                issuer: _jWTConfi.Issuer,
                audience: _jWTConfi.Audience,
                claims: claims,
                signingCredentials: signingCredentials,
                expires: DateTime.Now.AddMinutes(_jWTConfi.DurationInMinutes)
                );
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var token = jwtSecurityTokenHandler.WriteToken(jwtSecurityToken);
            
            return token;
        }
    }
}
