const mongoose = require('mongoose');
let dbURI = 'mongodb://localhost/BobaBae';
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://heroku_9chskp10:be6r53v9s6ajug8iold27eklg6@ds139427.mlab.com:39427/heroku_9chskp10';
}
const readLine = require('readline');

const connect = () => {
  setTimeout(() => mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}


mongoose.connection.on('connected', () => {
  console.log('connected');
});

mongoose.connection.on('error', err => {
  console.log('error: ' + err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});


const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

connect();

require('./locations');