import { Response } from 'express';

import { HTTPCode } from '../types/HTTP';

import APIError from './error';

export function respondSuccess (res: Response, data: any, code = HTTPCode.OK) {
    const response = { status: 'ok', data };

    res.setHeader('Content-Type', 'application/json');

    return res.status(code).send(JSON.stringify(response, null, 4));
}

export function closeWithError (res: Response, error: APIError) {
    const response = { status: 'error', message: error.message };

    res.setHeader('Content-Type', 'application/json');

    return res.status(error.code).send(response);
}
