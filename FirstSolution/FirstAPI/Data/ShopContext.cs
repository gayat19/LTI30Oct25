using FirstAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstAPI.Data
{
    public class ShopContext : DbContext
    {
        public ShopContext(DbContextOptions options) : base(options)
        {
        }
        public ShopContext()
        {
            
        }
        //override protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=master;Integrated Security=SSPI;Trusted_Connection=True;Initial Catalog=shop27oct25");
        //}
        public DbSet<Product> Products { get; set; } 
    }
}
