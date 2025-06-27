using Ecommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Data
{
    public class EcommerceContext : DbContext
    {
        public EcommerceContext(DbContextOptions<EcommerceContext> options)
            : base(options)
        {
        }
        // DbSet properties for your entities go here, e.g.:
        public DbSet<ProductEntity> Products { get; set; }
        public DbSet<OrderEntity> Orders { get; set; }
        public DbSet<CartEntity> Carts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Fluent API configurations can be added here
        }
    }
    {
    }
}
