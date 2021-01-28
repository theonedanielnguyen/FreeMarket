const express = require('express');
const app = express();
const cors = require('cors');
require('./server/config/mongoose.config');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/FreeMarket.routes.js')(app);
app.listen(8000, () => console.log('Server access opened on port 8000. Listening...'));