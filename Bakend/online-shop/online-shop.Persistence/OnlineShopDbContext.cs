using Microsoft.EntityFrameworkCore;
using online_shop.Domain.Common;
using online_shop.Domain.User;

namespace online_shop.Persistence
{
    public class OnlineShopDbContext:DbContext
    {
        #region Constructor

        public OnlineShopDbContext(DbContextOptions<OnlineShopDbContext> dbContextOptions) : base(dbContextOptions)
        {

        }

        #endregion

        #region DbSet

        public DbSet<User> Users{ get; set; }

        #endregion

        #region  On Model Creating

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(OnlineShopDbContext).Assembly);

            foreach (var relationShip in modelBuilder.Model.GetEntityTypes().SelectMany(s=>s.GetForeignKeys()))
            {
                relationShip.DeleteBehavior = DeleteBehavior.Cascade;
            }

            base.OnModelCreating(modelBuilder);
        }

        #endregion

        #region Save Change

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries<BaseDomainEntity>())
            {
                entry.Entity.LastModifiedDate = DateTime.Now;
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.DateCreated = DateTime.Now;
                }
            }
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            foreach (var entry in ChangeTracker.Entries<BaseDomainEntity>())
            {
                entry.Entity.LastModifiedDate = DateTime.Now;
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.DateCreated = DateTime.Now;
                }
            }


            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }


        #endregion
    }
}
