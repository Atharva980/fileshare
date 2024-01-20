const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({
  path: './.env',
});

// Database Connection
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost:27017/ShareX", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected With DataBase..!');
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}...`);
});


