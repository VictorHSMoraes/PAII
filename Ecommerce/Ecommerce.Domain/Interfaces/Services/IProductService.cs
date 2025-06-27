using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Services
{
    public interface IProductService
    {
        public Task<IEnumerable<ProductEntity>> Get();
        public Task<ProductEntity> GetById(int id);
    }
}
