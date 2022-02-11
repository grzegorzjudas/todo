import DB from '../database/knex';

import { DBSchemaTask, DBTable } from '../types/DB';

export async function listTasks (): Promise<DBSchemaTask[]> {
    const tasks = await DB(DBTable.TASKS).select('*') as DBSchemaTask[];

    return tasks;
}
