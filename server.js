const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// Connect mongoose to either the MONGODB_URI variable or local server database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pizza-hunt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set mongoDB to log queries to the console
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
