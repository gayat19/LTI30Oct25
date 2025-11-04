using FirstAPI.Data;
using FirstAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ShopContext _context;

        public ProductController(ShopContext context)
        {
            _context = context;
        }
        [HttpPost]
        public ActionResult<Product> Post(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Created("Created at product cotroller",product);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var result = _context.Products.ToList();
            if (result.Count == 0)
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
}
