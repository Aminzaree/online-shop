using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using online_shop.Domain.User;

namespace online_shop.Persistence.Configurations.Entities
{
    public class UserConfigurations : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(k => k.Id);
            builder.Property(u => u.FirstName).HasMaxLength(150);
            builder.Property(u => u.LastName).HasMaxLength(250);
            builder.Property(u => u.FullName).HasMaxLength(450);
            builder.Property(u => u.Password)
                .HasColumnName("PasswordHash").HasMaxLength(250);
            builder.Property(u => u.Email).HasMaxLength(350);
            builder.Property(u => u.Mobile).HasMaxLength(11);
            builder.Property(u => u.ActiveCodeMobile).HasMaxLength(10);
            builder.Property(u => u.ActiveCodeEmail).HasMaxLength(250);
            builder.Property(u => u.Avatar).HasMaxLength(50);
            builder.Property(u => u.UserName)
                .HasMaxLength(350);
                //.HasComputedColumnSql("LEFT(Email, CHARINDEX('@', Email) - 1)",true)
                //.ValueGeneratedOnAddOrUpdate();
            builder.Property(u => u.FullName)
                .HasComputedColumnSql("[FirstName]+' '+[LastName]");
            builder.Property(b => b.CreatedBy).IsRequired().HasMaxLength(250);
            builder.Property(b => b.LastModifiedBy).HasMaxLength(250);


        }
    }
}
