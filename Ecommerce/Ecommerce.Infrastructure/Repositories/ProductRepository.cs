using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly EcommerceContext _context;

        public ProductRepository(EcommerceContext context)
        {
            _context = context;
        }

        public Task<ProductEntity> CreateProductAsync(ProductEntity product)
        {
            _context.Set<ProductEntity>().AddAsync(product);
            _context.SaveChangesAsync();
        }

        public Task<IEnumerable<ProductEntity>> GetAllProductsAsync()
        {
            return _context.Set<ProductEntity>().ToListAsync();
        }

        public Task<ProductEntity> GetProductByIdAsync(int id)
        {
            return _context.Set<T>().FindAsync(id);
        }
    }
}
