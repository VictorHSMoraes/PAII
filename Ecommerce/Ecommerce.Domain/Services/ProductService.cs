using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Domain.Interfaces.Services;

namespace Ecommerce.Domain.Services
{
    public class ProductService : IProductService
    {
        public readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<ProductEntity>> Get()
        {
            return await _productRepository.GetAllProductsAsync();
        }

        public async Task<ProductEntity> GetById(int id)
        {
            return await _productRepository.GetProductByIdAsync(id);
        }
    }
}
