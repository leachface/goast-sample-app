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
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).send('Invalid request body');
    }
    const { name, age } = req.body;
    if (typeof name !== 'string' || typeof age !== 'number') {
        return res.status(400).send('Invalid data types for name or age');
    }
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users[userIndex].name = req.body.name;
    users[userIndex].age = req.body.age;

    res.json(users[userIndex]);
});

app.use((err, req, res, next) => {
    if (!(err instanceof Error)) {
        return next(err);
    }
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Server restarted and is running on http://localhost:${PORT}`);
});