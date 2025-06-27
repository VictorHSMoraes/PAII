using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.API.Controllers;

[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpGet]
    public async Task<IEnumerable<OrderEntity>> Get()
    {
        return await _orderService.Get();
    }

    [HttpGet("{id}")]
    public async Task<OrderEntity> GetById(int id)
    {
        return await _orderService.GetById(id);
    }

    [HttpPost]
    public async Task<IActionResult> Create(OrderEntity order)
    {
        if (order == null)
        {
            return BadRequest("Order cannot be null");
        }
        var createdOrder = await _orderService.Create(order);
        return CreatedAtAction(nameof(GetById), new { id = createdOrder.Id }, createdOrder);
    }
}
