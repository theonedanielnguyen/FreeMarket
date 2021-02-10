const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FreeMarketDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error while connecting to the databse", err))