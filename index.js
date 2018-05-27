const express = require('express')
const app = express()

function doWork(duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  doWork(5000)
  res.send('Slow...')
})

app.get('/fast', (req, res) => {
  res.send('Fast')
})

app.listen(3000, () => {
  console.log('Server is running on 3000')
})
