import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
});

const instance = app.listen(8081, () => {
    console.log('Server listening on port 8081');
}).on('error', (error) => {
    console.error(error);
});
