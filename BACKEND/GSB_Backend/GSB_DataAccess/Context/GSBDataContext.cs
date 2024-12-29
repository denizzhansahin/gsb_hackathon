using GSB_Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace GSB_DataAccess.Context;

public class GSBDataContext : DbContext
{

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {// DESKTOP-HRFRTEC\SQLEXPRESS
        optionsBuilder.UseSqlServer("Server=DESKTOP-HRFRTEC\\SQLEXPRESS;Database=GBS;Trusted_Connection=True;TrustServerCertificate=True;Integrated Security=True");
        base.OnConfiguring(optionsBuilder);
    }

    public DbSet<Advertisement> Advertisements { get; set; }
    public DbSet<CategoriesContent> CategoriesContents { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Company> Companies { get; set; }
    public DbSet<Grant> Grants { get; set; }
    public DbSet<JobInternship> JobInternships { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Stage> Stages { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<UserDetail> UserDetails { get; set; }
    public DbSet<GrantType> GrantTypes { get; set; }
    public DbSet<Volunteering> Volunteerings { get; set; }

}
