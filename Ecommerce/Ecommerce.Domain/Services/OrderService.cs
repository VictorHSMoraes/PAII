using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Repositories;
using Ecommerce.Domain.Interfaces.Services;

namespace Ecommerce.Domain.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public Task<OrderEntity> Create(OrderEntity order)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<OrderEntity>> Get()
        {
            throw new NotImplementedException();
        }

        public Task<OrderEntity> GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
