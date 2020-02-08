const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URL = process.env.MONG_URL
mongoose.connect(URL, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully!")
})


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
