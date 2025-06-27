using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Domain.Interfaces.Services;

namespace Ecommerce.Domain.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;

        public CartService(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        public Task<CartEntity> CreateCart(CartEntity cart)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CartEntity>> GetAllCart()
        {
            throw new NotImplementedException();
        }

        public Task<CartEntity> GetCartById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
