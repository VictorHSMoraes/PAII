using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Services
{
    public interface ICartService
    {
        Task<IEnumerable<CartEntity>> GetAllCart();
        Task<CartEntity> GetCartById(int id);
        Task<CartEntity> CreateCart(CartEntity cart);
    }
}
