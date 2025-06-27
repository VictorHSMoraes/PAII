using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Repositories
{
    public interface IOrderRepository
    {
        public Task<IEnumerable<OrderEntity>> GetAllOrdersAsync();
        public Task<OrderEntity> GetOrderByIdAsync(int id);
        public Task<OrderEntity> CreateOrderAsync(OrderEntity order);
    }
}