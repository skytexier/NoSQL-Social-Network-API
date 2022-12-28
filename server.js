const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//Basic express server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Calling our connection to the MongoDB with a one-time listener
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on ${PORT}`)
    });
});


