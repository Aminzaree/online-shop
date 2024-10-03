using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using online_shop.Domain.Common;

namespace online_shop.Persistence.Configurations.Entities
{
    public class BaseDomainEntityConfigurations : IEntityTypeConfiguration<BaseDomainEntity>
    {
        public void Configure(EntityTypeBuilder<BaseDomainEntity> builder)
        {
            builder.HasKey(k => k.Id);
            builder.Property(b=>b.CreatedBy).IsRequired().HasMaxLength(250);
        }
    }
}
