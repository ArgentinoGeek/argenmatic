using Argenmatic.Core.ProjectAggregate.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Argenmatic.Api.Controllers
{
    public class ResumeController : BaseApiController
    {
        private IMediator _mediator;

        public ResumeController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> GeneratePdfFromHtmlContent([FromBody] string htmlContent)
        {
            var file = await _mediator.Send(new CreatePdfFromHtmlCommand(htmlContent));

            return File(file, "application/pdf", DateTime.UtcNow.Ticks.ToString());
        }
    }
}
