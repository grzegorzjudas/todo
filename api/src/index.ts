import express from 'express';

import { createErrorFromNative } from './lib/error';
import { respondSuccess, closeWithError } from './lib/http';
import routes from './routes';

const app = express();

for (let route of routes) {
    app[route.method.toLowerCase()](route.url, (req, res, next) => {
        try {
            const response = route.controller(req, res, next);

            return respondSuccess(res, response);
        } catch (error) {
            return closeWithError(res, createErrorFromNative(error));
        }
    });
}

const instance = app.listen(8081, () => {
    console.log('Server listening on port 8081');
}).on('error', (error) => {
    console.error(error);
});
