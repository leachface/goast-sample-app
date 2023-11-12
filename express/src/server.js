const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    if (req.headers['content-type'] !== 'application/json') {
        return res.status(400).send({ error: 'Bad Request: Content-Type must be application/json' });
    }
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send({ error: 'User not found' });
    }
    const user = users[userIndex];
    user.age = req.body.age;
    res.json(users[userIndex]);
});