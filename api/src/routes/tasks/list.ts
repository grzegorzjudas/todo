import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';

import { listTasks } from '../../database/tasks';

export default {
    method: HTTPMethod.GET,
    url: '/tasks',
    controller: async () => {
        const tasks = await listTasks();

        return tasks;
    }
} as APIRoute;
