using Argenmatic.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Argenmatic.Api
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var dbContext = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>(), null))
            {
                // Look for any TODO items.
                //if (dbContext.ToDoItems.Any())
                //{
                //    return;   // DB has been seeded
                //}

                PopulateTestData(dbContext);
            }
        }

        public static void PopulateTestData(AppDbContext dbContext)
        {
            //foreach (var item in dbContext.ToDoItems)
            //{
            //    dbContext.Remove(item);
            //}
            //dbContext.SaveChanges();

            //TestProject1.AddItem(ToDoItem1);
            //TestProject1.AddItem(ToDoItem2);
            //TestProject1.AddItem(ToDoItem3);
            //dbContext.Projects.Add(TestProject1);

            dbContext.SaveChanges();
        }
    }
}
