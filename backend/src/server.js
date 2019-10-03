const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-a4w0v.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
