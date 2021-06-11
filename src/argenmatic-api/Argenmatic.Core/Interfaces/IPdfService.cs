namespace Argenmatic.Core.Interfaces
{
    public interface IPdfService
    {
        byte[] GeneratePdfFileFromHtml(string htmlContent);
    }
}
