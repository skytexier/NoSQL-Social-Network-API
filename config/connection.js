const { connect, connection } = require('mongoose');

//require mongoose for our connection export and connect function
connect('mongodb://127.0.0.1:27017/socialAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;