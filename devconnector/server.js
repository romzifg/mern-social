const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURL;

// Connect MongoDb
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello')
});

// Use Routes
app.use('/api/v1/users', users)
app.use('/api/v1/profile', profile)
app.use('/api/v1/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))