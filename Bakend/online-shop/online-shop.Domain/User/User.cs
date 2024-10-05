using online_shop.Domain.Common;

namespace online_shop.Domain.User
{
    public class User:BaseDomainEntity
    { 

        #region Property

        public required string Email { get; set; }
        public required string UserName { get; set; }

        public required string Password { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? FullName { get; set; }

        public string? Avatar { get; set; }

        public bool IsEmailActive { get; set; }

        public string? ActiveCodeEmail { get; set; }

        public string? Mobile { get; set; }

        public bool IsMobileActive { get; set; }

        public string? ActiveCodeMobile { get; set; }

        public bool IsBlocked { get; set; }

        public bool IsActive { get; set; }

        public int Balance { get; set; }
        
        #endregion


    }
}
