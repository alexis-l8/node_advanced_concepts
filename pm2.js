const express = require('express')
const crypto = require('crypto')
const app = express()

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hi there')
  })
})

app.listen(3000, function() {
  console.log('Server is running on port 3000')
})
