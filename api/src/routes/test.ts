import joi from 'joi';

import { APIRoute } from '../types/API';
import { HTTPMethod } from '../types/HTTP';

export default {
    method: HTTPMethod.POST,
    url: '/test',
    schema: joi.object({
        name: joi.string().min(4).required(),
        age: joi.number().min(18),
        email: joi.string().email().required()
    }).required(),
    controller: () => {
        return { test: '123' };
    }
} as APIRoute;
