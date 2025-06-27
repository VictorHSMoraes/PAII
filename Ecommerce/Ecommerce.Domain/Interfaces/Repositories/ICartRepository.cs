using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Repositories
{
    public interface ICartRepository
    {
        Task<IEnumerable<CartEntity>> GetAllCartsAsync();
        Task<CartEntity> GetCartByIdAsync(int id);
        Task<CartEntity> CreateCartAsync(CartEntity cart);
    }
}