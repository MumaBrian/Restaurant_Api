import * as nodemailer from "nodemailer";

export  class NodeMailer {
  private async initiateTransport() {
    try {
      return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "gachette966@gmail.com",
          pass: "tsoqyrgzwnxgwluq",
        },

        from: process.env.EMAIL_FROM,
      });
    } catch (error) {
      console.error("Error initializing transporter:", error);
      throw error;
    }
  }

  public async sendEmail(to: string, htmlContent: string) {
    try {
      const transporter = await this.initiateTransport();

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to,
        subject: "Email Verification",
        html: htmlContent,
      };

      const results = await transporter.sendMail(mailOptions);

      if (results.accepted.length !== 0) {
        return {
          emailSent: true,
        };
      } else {
        return {
          emailSent: false,
        };
      }
    } catch (error) {
      console.error(error);

      return {
        emailSent: false,
      };
    }
  }
}

// import  nodemailer from "nodemailer";

// export class NodeMailer {
//   public static initiateTransport() {
//     return nodemailer.createTransport({
//       host: process.env.SMTP_HOST ,
//       port: process.env.SMTP_PORT ,
//       secureConnection: process.env.SMTP_SECURE ,
//       auth: {
//         user: process.env.SMTP_USER ,
//         pass: process.env.SMTP_PASSWORD,
//       },
//       tls: {
//         ciphers: "SSLv3",
//       },
//       from: process.env.MAIL_FROM,
//     });
//   }

//   static sendMail(data: {
//     to: [string];
//     subject: string;
//     html: string;
//   }): Promise<any> {
//     return NodeMailer.initiateTransport().sendMail({
//       from: process.env.MAIL_FROM,
//       to: data.to,
//       subject: data.subject,
//       html: data.html,
//     });
//   }
// }
