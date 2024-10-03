using System.Net;

namespace online_shop.Application.Responses
{
    public class BaseCommandResponse<T>
    {
        public bool Success { get; set; } = true;
        public string? Message { get; set; }
        public T? Value { get; set; }
        public HttpStatusCode? StatusCode { get; set; }


        public BaseCommandResponse(bool success)
        {
            Success = success;
        }
        public BaseCommandResponse(bool success, string? message)
        {
            Success = success;
            Message = message;
        }
        public BaseCommandResponse(bool success, string? message, T? value)
        {
            Success = success;
            Message = message;
            Value = value;
        }
        public BaseCommandResponse(bool success, string message, T? value, HttpStatusCode? statusCode)
        {
            Success = success;
            Message = message;
            Value = value;
            StatusCode = statusCode;
        }
    }
}
