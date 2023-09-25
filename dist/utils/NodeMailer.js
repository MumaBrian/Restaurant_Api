"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailer = void 0;
const nodemailer = require("nodemailer");
class NodeMailer {
    initiateTransport() {
        return __awaiter(this, void 0, void 0, function* () {
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
            }
            catch (error) {
                console.error("Error initializing transporter:", error);
                throw error;
            }
        });
    }
    sendEmail(to, htmlContent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transporter = yield this.initiateTransport();
                const mailOptions = {
                    from: process.env.EMAIL_FROM,
                    to: to,
                    subject: "Email Verification",
                    html: htmlContent,
                };
                const results = yield transporter.sendMail(mailOptions);
                if (results.accepted.length !== 0) {
                    return {
                        emailSent: true,
                    };
                }
                else {
                    return {
                        emailSent: false,
                    };
                }
            }
            catch (error) {
                console.error(error);
                return {
                    emailSent: false,
                };
            }
        });
    }
}
exports.NodeMailer = NodeMailer;
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
