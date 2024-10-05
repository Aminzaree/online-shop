using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;
using online_shop.API.DependencyContainer;
using online_shop.API.Utilities;
using online_shop.Application;
using online_shop.Infrastructure;
using online_shop.Persistence;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(op =>
{
    op.ReturnHttpNotAcceptable = true;
}).AddNewtonsoftJson();

builder.Services.AddMvc();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(op =>
{
    // op.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, "Swagger.Xml"), true);
    op.OperationFilter<SwaggerFileOperationFilter>();
    var Security = new OpenApiSecurityScheme
    {
        Name = "Jwt Authorization",
        Description = "توکنرا وارد کنید - دقت کنید فقط توکن را",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };
    op.AddSecurityDefinition(Security.Reference.Id, Security);
    op.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {Security,new string[]{ } }
    });
});

builder.Services.ConfigurePersistenceServices(builder.Configuration);
builder.Services.ConfigureAppilcationServices();
builder.Services.ConfigureIdentityServices(builder.Configuration);
builder.Services.ConfigureInfrastructureServices(builder.Configuration);
builder.Services.ConfigureApiServices(builder.Configuration);
builder.Services.AddCors(options =>
{
    options.AddPolicy("corsPolicy", b =>
    {
        b.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("http://localhost:5173");
    });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("corsPolicy");

app.MapControllers();

app.Run();
