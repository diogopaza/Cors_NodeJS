const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/users', (req, res) => {

    res.json([
        {
            name:'Diogo'
        },
        {
            name:'Paza'
        }
    ])
})


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})