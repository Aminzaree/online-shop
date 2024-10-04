using System.Net;

namespace online_shop.Application.Responses
{
    public class BaseCommandResponse
    {
        public Guid? Id { get; set; }
        public bool IsSuccess { get; set; } = true;
        public string? Message { get; set; }
        public HttpStatusCode? StatusCode { get; set; }
       
    }
    public class BaseCommandResponse<T>: BaseCommandResponse
    {
       
        public T? Value { get; set; }       
     
       
    }
}
