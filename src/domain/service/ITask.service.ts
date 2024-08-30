// CRUD

import { ITask, ITaskCreate, ITaskUpdate } from "../task/Itask";

export interface ITaskService {
    create: (task: ITaskCreate) => Promise<ITask>
    update: (_id: ITask["_id"], task: ITaskUpdate) => Promise<boolean>;
    get: (_id: ITask["_id"]) => Promise<ITask>;
    delete: (_id: ITask["_id"]) => Promise<boolean>;
    getAll: () => Promise<ITask[]>;
}