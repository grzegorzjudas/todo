import joi from 'joi';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';

import { updateTask } from '../../database/tasks';

export default {
    method: HTTPMethod.PATCH,
    url: '/tasks/:id',
    schema: joi.object({
        title: joi.string(),
        complete: joi.boolean()
    }).required(),
    controller: async (req) => {
        const { title, complete } = req.body;
        const task = await updateTask(req.params.id, { title, complete });

        return task;
    }
} as APIRoute;
