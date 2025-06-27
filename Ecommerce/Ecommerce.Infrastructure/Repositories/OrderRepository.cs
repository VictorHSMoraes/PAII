using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;

namespace Ecommerce.Infrastructure.Repositories
{
    class OrderRepository : IOrderRepository
    {
        public Task<OrderEntity> CreateOrderAsync(OrderEntity order)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<OrderEntity>> GetAllOrdersAsync()
        {
            throw new NotImplementedException();
        }

        public Task<OrderEntity> GetOrderByIdAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
