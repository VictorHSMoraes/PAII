using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces.Services
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderEntity>> Get();
        Task<OrderEntity> GetById(int id);
        Task<OrderEntity> Create(OrderEntity order);
    }
}
