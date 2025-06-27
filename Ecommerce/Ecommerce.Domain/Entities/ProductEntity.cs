namespace Ecommerce.Domain.Entities
{
    public class ProductEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Colors { get; set; }
        public string Sizes { get; set; }
        public List<string> Images { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}
