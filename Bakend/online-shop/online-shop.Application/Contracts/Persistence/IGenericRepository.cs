using online_shop.Domain.Common;

namespace online_shop.Application.Contracts.Persistence
{
    public interface IGenericRepository<TEntity> : IAsyncDisposable where TEntity : BaseDomainEntity
    {
        IQueryable<TEntity> Queries();
        Task<TEntity> GetByIdAsync(Guid id);
        Task<TEntity> AddAsync(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        Task DeleteAsync(Guid id);
        void DeletePermanent(TEntity entity);
        Task DeletePermanentAsync(Guid id);
        Task SaveChangeAsync();
        int SaveChange();
    }
}
