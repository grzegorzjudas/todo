import { APIRoute } from '../types/API';
import { HTTPCode, HTTPMethod } from '../types/HTTP';

import APIError from '../lib/error';

export default {
    method: HTTPMethod.GET,
    url: '/status',
    controller: () => {
        return { test: '123' };
    }
} as APIRoute;
