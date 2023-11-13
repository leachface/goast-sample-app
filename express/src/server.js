const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

app.use(express.json());

app.put('/users/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }
        // Ensure that the user object exists before setting properties
        if (!users[userIndex]) {
            return res.status(404).send('User not found');
        }
        users[userIndex].name = req.body.name;
        users[userIndex].age = req.body.age;
        res.json(users[userIndex]);
    } catch (error) {
        res.status(500).send('An error occurred while updating the user');
    }
});
app.get('/users', (req, res) => {
    res.json(users);
});