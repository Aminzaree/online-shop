using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace online_shop.API.Utilities
{
    public class SwaggerFileOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var fileParams = context.MethodInfo.GetParameters()
                .Where(p => p.ParameterType.FullName.Equals(typeof(IFormFile).FullName));

            if (fileParams.Any() && fileParams.Count() == 1)
            {
                operation.Parameters.Add(new OpenApiParameter
                {
                    Name = fileParams.First().Name,
                    In = ParameterLocation.Header,
                    Required = true,
                    Description = "Upload file",
                    Schema = new OpenApiSchema
                    {
                        Type = "string",
                        Format = "binary"
                    }
                });              

            }
        }
    }
}
