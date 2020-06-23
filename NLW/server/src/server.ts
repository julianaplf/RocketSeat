import express, { response, json } from 'express';

const app = express();

const users = ['Diego', 'Juliana', 'Gustavo', 'Pretinha'];

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    res.json(users[id]);
});

app.get('/users', (req, res) => {
    const search = String(req.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return res.json(filteredUsers)
});

app.post('/users', (req, res) => {
    const user = {
        name : 'Juliana', 
        email: 'juliana.fonseca@gmail.com'
    }
    return res.json(user);
});

app.listen(3333);