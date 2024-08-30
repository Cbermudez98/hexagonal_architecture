export interface ITask {
    _id: string;
    title: string;
    description: string;
    done: boolean;
}

export interface ITaskCreate extends Omit<ITask, "_id"> {}

export interface ITaskUpdate extends Partial<ITaskCreate> {}