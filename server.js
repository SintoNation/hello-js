require("dotenv").config();

const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    // Logs every request
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next(); // Pass to next handler (required!)
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

app.get('/search', (req, res) => {
    const search = req.query.id;
    console.log(search);
    res.send(search);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});