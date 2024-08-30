import { IMail } from "../domain/mail/IMail";
import { IEmailService } from "../domain/service/IEmail.service";
import { ITaskService } from "../domain/service/ITask.service";
import { ITaskCreate } from "../domain/task/Itask";

export class TasksCreateMail {
    constructor(private readonly _taskSrv: ITaskService, private readonly _emailSrv: IEmailService) {}

    async create(task: ITaskCreate, mail: IMail): Promise<boolean> {
        const newTasks = await this._taskSrv.create(task);
        console.log("🚀  ~ TasksCreateMail ~ create ~ newTasks:", newTasks);
        const sendEmail = await this._emailSrv.send(mail);
        console.log("🚀  ~ TasksCreateMail ~ create ~ sendEmail:", sendEmail);
        return true;
    }
}