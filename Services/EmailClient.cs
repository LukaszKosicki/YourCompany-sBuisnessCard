using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Net;
using cadmar.Models;
using System.ComponentModel;

namespace cadmar.Services
{
    public class EmailClient
    {
        private SmtpClient client;
        private MailMessage message;
        private string emailFrom;
        private bool mailSend = false;

        public EmailClient(string host, string emailFrom, string password)
        {
            client = new SmtpClient(host);
            client.Credentials = new NetworkCredential(emailFrom, password);
            this.emailFrom = emailFrom;
        }

        public void CreateMessage(string emailTo, ContactForm form)
        {
            message = new MailMessage(emailFrom, emailTo);
            message.Subject = form.Title;
            message.Body = form.Content + Environment.NewLine +
                Environment.NewLine + form.FullName + Environment.NewLine +
                form.Email + Environment.NewLine + form.PhoneNumber;
        }

        public bool SendEmail()
        {
            client.EnableSsl = true;
     /*       client.SendCompleted += new 
                SendCompletedEventHandler(SendCompletedCallback); */
            string userState = "contactForm";
            try
            {
                client.SendMailAsync(message);
                return true;
            }
            catch
            {
             
                return false;
            }
        }
        /*
        private void SendCompletedCallback(object sender, AsyncCompletedEventArgs e)
        {
            string token = (string)e.UserState;

            if(e.Error == null)
            {
                mailSend = true;
            } 
        }*/
    }
}
