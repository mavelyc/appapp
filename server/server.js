const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGO_URL;
mongoose.connect(URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully!");
});

const applicationsRouter = require('./routes/applications');

app.use('/applications', applicationsRouter)


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
