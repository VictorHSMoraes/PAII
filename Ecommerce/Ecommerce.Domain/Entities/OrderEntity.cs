namespace Ecommerce.Domain.Entities
{
    public class OrderEntity
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Cep { get; set; }
        public string FullName { get; set; }
        public string Cart { get; set; }
        public string Month { get; set; }
        public string Year { get; set; }
        public string CVV { get; set; }
        public string Installments { get; set; }
        public decimal Total { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdateAt { get; set; }
    }
}
