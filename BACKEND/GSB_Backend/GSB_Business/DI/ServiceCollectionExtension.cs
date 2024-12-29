using GSB_Business.Implementations;
using GSB_Business.Interfaces;
using GSB_DataAccess.Context;
using GSB_DataAccess.Implementations;
using GSB_DataAccess.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace GSB_Business.DI;

public static class ServiceCollectionExtension
{
    public static void AddServiceCollectionExtension(this IServiceCollection services)
    {
        // DataAccess
        services.AddTransient<IAdvertisementRepository, AdvertisementRepository>();
        services.AddTransient<ICategoriesContentRepository, CategoriesContentRepository>();
        services.AddTransient<ICategoryRepository, CategoryRepository>();
        services.AddTransient<ICompanyRepository, CompanyRepository>();
        services.AddTransient<IGrantRepository, GrantRepository>();
        services.AddTransient<IJobInternshipRepository, JobInternshipRepository>();
        services.AddTransient<IUserRepository, UserRepository>();
        services.AddTransient<IUserDetailRepository, UserDetailRepository>();
        services.AddTransient<IRoleRepository, RoleRepository>();
        services.AddTransient<IGrantTypeRepository, GrantTypeRepository>();
        services.AddTransient<IVolunteeringRepository, VolunteeringRepository>();

        // Business
        services.AddTransient<IAdvertisementBs, AdvertisementBs>();
        services.AddTransient<ICategoriesContentBs, CategoriesContentBs>();
        services.AddTransient<ICategoryBs, CategoryBs>();
        services.AddTransient<IGrantBs, GrantBs>();
        services.AddTransient<IJobInternshipBs, JobInternshipBs>();
        services.AddTransient<IUserBs, UserBs>();
        services.AddTransient<IVolunteeringBs, VolunteeringBs>();

        services.AddScoped<GSBDataContext>();
    }
}
