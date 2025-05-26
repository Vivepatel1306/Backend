// import dotenv from 'dotenv';
// dotenv.config();

import express from 'express';
const app = express();

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is a koji'
        },
         {
            id: 1,
            title: 'a joke',
            content: 'this is a koji'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5040;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});