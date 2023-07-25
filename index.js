const express = require('express');
const PORT = process.env.PORT || 6000;
const db = require('./config/mongoose');


const app = express();
app.use(express.json());


app.use('/', require('./routes'));
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})