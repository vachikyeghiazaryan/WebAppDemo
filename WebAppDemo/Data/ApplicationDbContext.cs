﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppDemo.Data.Entities;

namespace WebAppDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{

		}


		public DbSet<Product> Products { get; set; }
		public DbSet<RefCategory> RefCategories { get; set; }
	}
}
