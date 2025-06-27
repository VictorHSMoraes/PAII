using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Repositories
{
    public interface IProductRepository
    {
        public Task<IEnumerable<ProductEntity>> GetAllProductsAsync();
        public Task<ProductEntity> GetProductByIdAsync(int id);
    }
}