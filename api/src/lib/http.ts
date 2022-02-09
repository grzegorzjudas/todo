import joi, { AnySchema } from 'joi';
import { Response } from 'express';

import { HTTPCode } from '../types/HTTP';

import Config from '../lib/config';
import APIError from './error';

export function respondSuccess (res: Response, data: any, code = HTTPCode.OK) {
    res.setHeader('Content-Type', 'application/json');

    const response = { status: 'ok', data };
    const parsed = Config.NODE_ENV === 'development' ?
        JSON.stringify(response, null, 4) :
        JSON.stringify(response);

    return res.status(code).send(parsed);
}

export function closeWithError (res: Response, error: APIError) {
    const response = { status: 'error', message: error.message };

    res.setHeader('Content-Type', 'application/json');

    return res.status(error.code).send(response);
}

export function validateRequestPayload (body: any, schema: AnySchema): Promise<any> {
    const buildPath = (path: (string | number)[]) => {
        return (path.reduce((p, n) => {
            p += typeof n === 'string' ? `.${n}` : `[${n}]`;

            return p;
        }, '') as string).slice(1);
    };

    return new Promise((resolve, reject) => {
        const { error, value } = schema.validate(body, {
            convert: false,
            stripUnknown: true
        });

        if (error) {
            const message = `Request validation failed: ${error.details[0].message} (${buildPath(error.details[0].path)})`;

            return reject(new APIError(message, HTTPCode.BAD_REQUEST));
        }

        return resolve(value);
    });
}
