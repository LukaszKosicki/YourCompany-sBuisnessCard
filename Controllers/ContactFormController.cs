using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using cadmar.Models;
using cadmar.Services;
using Microsoft.Extensions.Configuration;

namespace cadmar.Controllers
{
    public class ContactFormController : Controller
    {
        private IConfiguration configuration;
        private Email email;

        public ContactFormController(IConfiguration conf) =>
            configuration = conf;

        [HttpPost]
        public async Task<JsonResult> SendForm([FromBody] ContactForm form)
        {
            string emailAdrressFrom = configuration["EmailFrom:Address"];
            string password = configuration["EmailFrom:Password"];
            string host = configuration["EmailFrom:Host"];

            string emailAddressTo = configuration["EmailTo:Address"];

            EmailClient emailClient = new EmailClient(host, emailAdrressFrom, password);
            emailClient.CreateMessage(emailAddressTo, form);
            bool res = emailClient.SendEmail();
            return Json(res);
        }
    }
}