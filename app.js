const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('/names', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
})