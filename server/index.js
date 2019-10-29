//Import 3 อย่างนี้มา 
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import ตำแหน่ง file ที่เชื่อม db (mongoDB)
const db = require('./db')

// ประกาศตำแปร app 
const app = express()
    // ประกาศ Port 
const apiPort = 3000

// ใช้ 3 ตัวที่ import มา 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


// ส่วน db
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))