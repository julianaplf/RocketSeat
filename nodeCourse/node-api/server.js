const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Opa World');
})

app.listen(3001);