const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {

    // paste uri from mongoDB atlas here and input your db user credentials
    const uri = 'mongodb+srv://skeletorkun:wXEkhAWD775VmC7z@cluster0-cd9yd.mongodb.net/test?retryWrites=true&w=majority';

    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            mongoDB = client.db('full-stack-server');

            if (err) {
                return callback(err);
            } else {
                return callback('DB OK');
            }
        }
    );
};

const getDB = () => {
    return mongoDB;
};

module.exports = { setupDB, getDB };