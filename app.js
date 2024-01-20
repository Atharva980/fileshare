const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port=process.env.PORT||5000

// Requiring Files
const uploadRoute = require('./routes/uploadRoute');
const downloadRoute = require('./routes/downloadRoute');
const userRoute = require('./routes/userRoute');
const viewRoute = require('./routes/viewRoute');

// Setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Using BodyParser to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Enabling CORS
app.use(cors());

// Routes
app.use('/', viewRoute);
app.use('/user', userRoute);
app.use('/api/files', uploadRoute);
app.use('/files', downloadRoute);

module.exports = app;
