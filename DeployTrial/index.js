require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello World! twitter se')
})
app.get('/insta', (req, res) => {
  res.send('Hello World! insta se')
})
// app.get('/fb', (req, res) => {  
//   res.json(githubData)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
