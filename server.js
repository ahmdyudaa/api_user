const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [
    {
        "nama": "John Doe",
        "email": "john.doe@example.com",
        "alamat": "123 Main Street, Anytown"
    },
    {
        "nama": "Jane Smith",
        "email": "jane.smith@example.com",
        "alamat": "456 Elm Street, Othertown"
    }
];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(users);
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});