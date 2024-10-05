using online_shop.Application.Models.Email;

namespace online_shop.Application.Contracts.Infrastructure
{
    public interface IEmailSender
    {
        Task SendEmailAsync(EmailDTO email);
    }
}
