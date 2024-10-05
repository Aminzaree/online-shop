namespace online_shop.Application.Models.Email.Email
{
    public class EmailConfig
    {
        public string FromAddress { get; set; }
        public string SmtpClient { get; set; }
        public string ApiKey { get; set; }
        public int Port { get; set; }
    }
}
