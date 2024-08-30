// import { NotFoundError } from './../../domain/errors/NotFoundError';
import { Request, Response } from "express";

interface IResponse {
    status: number;
    message?: string;
    data: Record<string, any>;
}

export class ResponseAdapter {
    static handler (func: Promise<any>, request: Request, response: Response) {
        func.then(res => {
            response.status(200).send({ res });
        }).catch(error => {
            // switch (error) {
            //     case typeof NotFoundError:
                    
            //         break;
            
            //     default:
            //         break;
            // }
            response.status(500).send({
                msg: "Internal server error"
            })
        });
    }
}