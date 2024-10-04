using Microsoft.EntityFrameworkCore;
using online_shop.Application.Contracts.Persistence;
using online_shop.Domain.Common;

namespace online_shop.Persistence.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : BaseDomainEntity
    {
        private readonly OnlineShopDbContext _context;
        private readonly DbSet<TEntity> _dbSet;

        public GenericRepository(OnlineShopDbContext context)
        {
            _context = context;
            _dbSet=_context.Set<TEntity>();
        }

        public IQueryable<TEntity> Queries()
        {
            return _dbSet.AsQueryable();
        }

        public async Task<TEntity> GetByIdAsync(Guid id) 
            => await _dbSet.FirstOrDefaultAsync(t => t.Id == id);        

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await SaveChangeAsync();
            return entity;
        }

        public void Update(TEntity entity)
        {
            _dbSet.Update(entity);
             SaveChange();
        }

        public void Delete(TEntity entity)
        {
            entity.IsDelete = true;
            Update(entity);
        }        

        public async Task DeleteAsync(Guid id)
        {
            TEntity entity=await GetByIdAsync(id);
            if(entity != null) 
                Delete(entity);
        }

        public void DeletePermanent(TEntity entity)
        {
            _dbSet.Remove(entity);
            SaveChange();
        }

        public async Task DeletePermanentAsync(Guid id)
        {
            TEntity entity = await GetByIdAsync(id);
            if(entity != null)
                DeletePermanent(entity);
        }
        

        public async Task SaveChangeAsync()
        {
            await _context.SaveChangesAsync();
        }
        public int SaveChange()
        {
            return _context.SaveChanges();
        }
        public async ValueTask DisposeAsync()
        {
           if(_context is not null)
                await _context.DisposeAsync();
        }

       
    }
}
