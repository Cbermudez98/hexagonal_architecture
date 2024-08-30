import { ITask } from "../../domain/task/Itask";

export interface IGenerateIdService {
    get: () => ITask["_id"];
} 