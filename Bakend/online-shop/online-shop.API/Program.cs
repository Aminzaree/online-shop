using online_shop.Persistence;
using online_shop.Application;
using online_shop.Infrastructure;
using online_shop.API.DependencyContainer;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(op =>
{
    op.ReturnHttpNotAcceptable = true;
}).AddNewtonsoftJson();
builder.Services.AddMvc();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigurePersistenceServices(builder.Configuration);
builder.Services.ConfigureAppilcationServices();
builder.Services.ConfigureIdentityServices(builder.Configuration);
builder.Services.ConfigureInfrastructureServices(builder.Configuration);
builder.Services.ConfigureApiServices(builder.Configuration);

builder.Services.AddCors(op =>
{
    op.AddPolicy("corsPolicy", b =>
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
