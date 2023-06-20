// import express from 'express'
// import terapiaRouter from './routes/terapias-route'
const express = require('express')
const terapiaRouter = require('./routes/terapias-route')

const app = express()
const PORT = 3000

// const terapias = require('./data/terapias.json')
// app.get('/terapias', (req, res) => {
//   return res.json(terapias)
// })

app.use(express.json())
app.use('/v1', terapiaRouter)

app.listen(PORT, async () => {
  console.log(`🚀🚀🚀 Server ready at  http://localhost:${PORT}`)
})