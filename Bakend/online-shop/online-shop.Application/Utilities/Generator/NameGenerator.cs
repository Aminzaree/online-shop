namespace online_shop.Application.Utilities.Generator
{
    public class NameGenerator
    {
        public static string GenerateUniqCode() => Guid.NewGuid().ToString().Replace("-", "");
    }
}
