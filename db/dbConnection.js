const mongoose = require('mongoose');

function dbConnection() {
    mongoose.connect(
        'mongodb+srv://mongodb+srv://tymur:WAFjfPMhdspSHdFs@cluster0.dlljd1h.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        err => {
            if (err) {
                console.log('err :', err);
                process.exit(1);
            }

            if (!err) {
                console.log('Database connection successful!');
            }
        },
    );
}

module.exports = dbConnection;