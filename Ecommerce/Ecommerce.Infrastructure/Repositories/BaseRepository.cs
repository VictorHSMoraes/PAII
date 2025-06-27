using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Ecommerce.Infrastructure.Repositories
{
    public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        internal readonly EcommerceContext _context;

        public BaseRepository(EcommerceContext context)
        {
            _context = context;
        }

        public async Task<T> FindAsync(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<T> FindAsync(decimal id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<T> FindAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(expression);
        }

        public async Task<T> FindAsNoTrackingAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().AsNoTracking().FirstOrDefaultAsync(expression);
        }

        public async Task<int> CountAsync()
        {
            return await _context.Set<T>().CountAsync();
        }

        public async Task<int> CountAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().Where(expression).CountAsync();
        }

        public async Task<int> CountAsync<K>(Expression<Func<T, IEnumerable<K>>> selectExpression)
        {
            return await _context.Set<T>().Select(selectExpression).Distinct().CountAsync();
        }

        public async Task<int> CountAsync<K>(Expression<Func<T, bool>> expression, Expression<Func<T, IEnumerable<K>>> selectExpression)
        {
            return await _context.Set<T>().Where(expression).Select(selectExpression).Distinct().CountAsync();
        }

        public async Task<IEnumerable<T>> ListAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<IEnumerable<T>> ListAsync(Expression<Func<T, bool>> expression)
        {
            return await _context.Set<T>().Where(expression).ToListAsync();
        }

        public async Task<List<T>> ListPaginationAsync<K>(Expression<Func<T, K>> sortExpression, int pagina, int quantidade)
        {
            return await _context.Set<T>().OrderBy(sortExpression).Skip(quantidade * (pagina - 1)).Take(quantidade).ToListAsync();
        }

        public async Task<List<T>> ListPaginationAsync<K>(Expression<Func<T, bool>> expression, Expression<Func<T, K>> sortExpression, int pagina, int quantidade)
        {
            return await _context.Set<T>().Where(expression).OrderBy(sortExpression).Skip(quantidade * (pagina - 1)).Take(quantidade).ToListAsync();
        }

        public async Task<T> AddAsync(T item)
        {
            await _context.Set<T>().AddAsync(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task RemoveAsync(T item)
        {
            _context.Set<T>().Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task<T> EditAsync(T item)
        {
            _context.Set<T>().Update(item);
            await _context.SaveChangesAsync();

            return item;
        }

    }

}
