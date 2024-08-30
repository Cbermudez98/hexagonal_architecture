import { CreateError } from "../../domain/errors/CreateError";
import { NotFoundError } from "../../domain/errors/NotFoundError";
import { UpdateError } from "../../domain/errors/UpdateError";
import { ITaskService } from "../../domain/service/ITask.service";
import { ITaskCreate, ITask, ITaskUpdate } from "../../domain/task/Itask";
import { IGenerateIdService } from "../interaces/IGenerateid.service";

export class TaskService implements ITaskService {
    private _tasks: ITask[] = [];

    constructor(private readonly _generateIdSrv: IGenerateIdService) {}

    async create(task: ITaskCreate): Promise<ITask> {
        try {
            const _id = this._generateIdSrv.get();
            const newTasks = { _id, ...task };
            this._tasks.push(newTasks);
            return newTasks;
        } catch (error) {
            throw new CreateError("Error at creating task");
        }
    }

    async update(_id: string, task: ITaskUpdate): Promise<boolean> {
        try {
            const taskFound = this._tasks.find(task => task._id === _id);
            if(!taskFound) {
                throw new NotFoundError("Task not found");
            }
            const newTasks = this._tasks.map((t) => {
                if(t._id === _id) return { ...t, ...task  };
                return t;
            });
            this._tasks = newTasks;
            return true;
        } catch (error) {
            throw error || new UpdateError("");
        }
    }

    async get(_id: string): Promise<ITask> {
        const task = this._tasks.find(task => task._id === _id);
        if(!task) {
            throw new NotFoundError("Task no found");
        }
        return task;
    }
    async getAll(): Promise<ITask[]> {
        return this._tasks;
    }
    
    async delete(_id: string): Promise<boolean> {
        this._tasks = this._tasks.filter(task => task._id !== _id);
        return true;
    }
}