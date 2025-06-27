using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.API.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IEnumerable<ProductEntity>> Get()
    {
        return await _productService.Get();
    }

    [HttpGet("{id}")]
    public async Task<ProductEntity> GetById(int id)
    {
        return await _productService.GetById(id);
    }
}
