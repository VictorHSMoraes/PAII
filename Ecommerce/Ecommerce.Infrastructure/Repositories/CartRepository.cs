using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Infrastructure.Data;

namespace Ecommerce.Infrastructure.Repositories
{
    public class CartRepository : BaseRepositorio<CartEntity>, ICartRepository
    {
        public CartRepository(EcommerceContext context) : base(context)
        { 
        }
    }
}
