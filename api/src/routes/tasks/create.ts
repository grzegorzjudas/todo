import joi from 'joi';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';

import { createTask } from '../../database/tasks';

export default {
    method: HTTPMethod.POST,
    url: '/tasks',
    schema: joi.object({
        title: joi.string().required()
    }).required(),
    controller: async (req) => {
        const title = req.body.title;
        const task = await createTask(title);

        return task;
    }
} as APIRoute;
