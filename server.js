//* Enternal modules

//* External modules
const express = require('express');
const cors = require('cors');
const BP = require('body-parser');

//* My modules

const app = express()

//* Esential middlewares
app.use(cors())
app.use(BP.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({
        "message": "hi boss!" 
    })
})


//* Run app
app.listen(3000, () => {
    console.log('http://localhost:3000');
})