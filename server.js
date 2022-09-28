const express = require('express');
const cors = require('cors');
const BP = require('body-parser');


const app = express()

app.use(cors())
app.use(BP.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({
        "message": "hi boss!" 
    })
})

app.listen(3000, () => {
    console.log('http://localhost:3000');
})