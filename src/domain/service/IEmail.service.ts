import { IMail } from "../mail/IMail";

export interface IEmailService {
    send: (mail: IMail) => Promise<boolean>;
}