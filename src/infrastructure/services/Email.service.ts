import { IMail } from "../../domain/mail/IMail";
import { IEmailService } from "../../domain/service/IEmail.service";

export class EmailService implements IEmailService {
    async send(mail: IMail): Promise<boolean> {
        console.log("Sending email....", mail);
        return true;
    }
}