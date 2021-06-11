using Argenmatic.Core.Interfaces;
using DinkToPdf;
using DinkToPdf.Contracts;

namespace Argenmatic.Infrastructure.Implementations
{
    public class PdfService : IPdfService
    {
        private IConverter _converter;

        public PdfService(IConverter converter)
        {
            _converter = converter;
        }

        public byte[] GeneratePdfFileFromHtml(string htmlContent)
        {
            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = {
                    PaperSize = PaperKind.A4,
                    Orientation = Orientation.Portrait,
                    ColorMode = ColorMode.Color,
                    Margins =
                    {
                        Top = 0,
                        Bottom = 0,
                        Left = 0,
                        Right = 0
                    }
                },
                Objects = {
                    new ObjectSettings
                     {
                         HtmlContent = htmlContent,
                         WebSettings =
                         {
                            DefaultEncoding = "utf-8",
                            LoadImages = true
                         }
                     }
                }
            };

            var pdf = _converter.Convert(doc);

            return pdf;
        }
    }
}
