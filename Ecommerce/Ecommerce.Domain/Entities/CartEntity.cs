namespace Ecommerce.Domain.Entities
{
    public class CartEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public int Quantity { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.Now;
        public DateTime? DataAtualizacao { get; set; }
    }
}
