using Microsoft.Extensions.Options;
using online_shop.Application.Contracts.Infrastructure;
using online_shop.Application.Models.Email;
using online_shop.Application.Models.Email.Email;
using System.Net.Mail;

namespace online_shop.Infrastructure.Email
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailConfig _config;

        public EmailSender(IOptions<EmailConfig> config)
        {
            _config = config.Value;
        }

        public Task SendEmailAsync(EmailDTO email)
        {
            return Task.Run(() =>
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient(_config.SmtpClient);
                mail.From = new MailAddress(_config.FromAddress, "تست");
                mail.To.Add(email.To);
                mail.Subject = email.Subject;
                mail.Body = email.Body;
                mail.IsBodyHtml = true;
                mail.BodyEncoding = System.Text.Encoding.UTF8;


                //System.Net.Mail.Attachment attachment;
                // attachment = new System.Net.Mail.Attachment("c:/textfile.txt");
                // mail.Attachments.Add(attachment);

                SmtpServer.Port = 587;
                SmtpServer.UseDefaultCredentials = false;
                SmtpServer.Credentials = new System.Net.NetworkCredential(_config.FromAddress, _config.ApiKey);
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);

            });
        }
    }
}
