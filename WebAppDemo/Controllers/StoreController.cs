using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDemo.Models;

namespace WebAppDemo.Controllers
{
	[Route("api/[controller]/[action]")]
    public class StoreController : Controller
    {
		public StoreController()
		{

		}

		[HttpGet]
		public IEnumerable<StoreProduct> Products()
		{
			var storeProducts = new List<StoreProduct>();
			for(int i = 1; i <= 10; i++)
			{
				storeProducts.Add(new StoreProduct()
				{
					Id = i,
					Name = "Product " + i,
					Description = "Product " + i + " description",
					ImageUrl = "https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png"
				});
			}
			return storeProducts;
		}
    }
}
