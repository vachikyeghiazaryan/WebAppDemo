using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDemo.Data.Entities
{
    public class Product
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public int RefCategoryId { get; set; }

		public virtual RefCategory RefCategory { get; set; }

	}
}
