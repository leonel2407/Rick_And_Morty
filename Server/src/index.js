const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
})