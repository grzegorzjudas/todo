import { Response } from 'express';

import { HTTPCode } from '../types/HTTP';

export function respondSuccess (res: Response, data: any, code = HTTPCode.OK) {
    const response = { status: 'ok', data };

    res.setHeader('Content-Type', 'application/json');

    return res.status(code).send(JSON.stringify(response, null, 4));
}

export function closeWithError (res: Response, error: Error, code = HTTPCode.INTERNAL_SERVER_ERROR) {
    const response = { status: 'error', message: error.message };

    res.setHeader('Content-Type', 'application/json');

    return res.status(code).send(response);
}
