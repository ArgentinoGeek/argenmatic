using Argenmatic.Core.Interfaces;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Argenmatic.Core.ProjectAggregate.Commands
{
    public class CreatePdfFromHtmlCommand : IRequest<byte[]>
    {
        public CreatePdfFromHtmlCommand(string htmlContent)
        {
            HtmlContent = htmlContent;
        }

        public string HtmlContent { get; set; }
    }

    public class CreatePdfFromHtmlCommandHandler : IRequestHandler<CreatePdfFromHtmlCommand, byte[]>
    {
        private readonly IPdfService _pdfService;

        public CreatePdfFromHtmlCommandHandler(IPdfService pdfService)
        {
            _pdfService = pdfService;
        }

        public async Task<byte[]> Handle(CreatePdfFromHtmlCommand request, CancellationToken cancellationToken)
        {
            return _pdfService.GeneratePdfFileFromHtml(request.HtmlContent);
        }
    }
}
