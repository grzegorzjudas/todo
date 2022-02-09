import express from 'express';

import Config from './lib/config';
import { createErrorFromNative } from './lib/error';
import { respondSuccess, closeWithError, validateRequestPayload } from './lib/http';
import routes from './routes';

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
    app[route.method.toLowerCase()](route.url, async (req, res, next) => {
        try {
            if (route.schema) {
                req.body = await validateRequestPayload(req.body, route.schema);
            }

            const response = route.controller(req, res, next);

            return respondSuccess(res, response);
        } catch (error) {
            return closeWithError(res, createErrorFromNative(error));
        }
    });
}

const instance = app.listen(Config.PORT, () => {
    console.log(`Server listening on port ${Config.PORT}`);
}).on('error', (error) => {
    console.error(error);
});
