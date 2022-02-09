import { Task } from 'types/Tasks';

export type State = {
    tasks: StateTasks;
}

export type StateTasks = Task[];
