const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doRequest() {
  https
    .request('https://google.com', res => {
      res.on('data', () => {})
      res.on('end', () => {
        console.log(Date.now() - start)
      })
    })
    .end()
}

function doHash(number) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash ${number}:`, Date.now() - start)
  })
}

doRequest()

fs.readFile('./multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start)
})

doHash(1)
doHash(2)
doHash(3)
doHash(4)

//Results:
//194
//Hash: 1887
//FS: 1888
//Hash: 1896
//Hash: 1907
//Hash: 1925
