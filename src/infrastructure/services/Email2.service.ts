import { IMail } from "../../domain/mail/IMail";
import { IEmailService } from "../../domain/service/IEmail.service";

export class EmailService2 implements IEmailService {
    async send(mail: IMail): Promise<boolean> {
        console.log("Hello equisde", mail.subject)
        return true;
    }
}