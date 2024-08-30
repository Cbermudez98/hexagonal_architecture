import { EmailService } from './../services/Email.service';
import { GenerateIdService } from './../services/Generateid.service';
import { TaskService } from './../services/Task.service';
import { TasksCreateMail } from './../../application/createTasksAndSendMail';
import { Request, Response, Router } from "express";
import { ResponseAdapter } from "./response.adapter";
import { IMail } from '../../domain/mail/IMail';
import { EmailService2 } from '../services/Email2.service';

const routerTask = Router();

const generateService = new GenerateIdService();
const taskService = new TaskService(generateService);
const emailService = new EmailService();
const emailService2 = new EmailService2();

const taskUseCase = new TasksCreateMail(taskService, emailService2);

routerTask.post("/", (req: Request, res: Response) => {
    const email: IMail = {
        content: "Hello world",
        from: "pepe@gmail.com",
        subject: "Happy create task",
        to: "lla@gmail.com"
    };
    ResponseAdapter.handler(taskUseCase.create(req.body, email), req, res);
});

export { routerTask }