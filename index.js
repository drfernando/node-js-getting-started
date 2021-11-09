const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/hola', function (req, res) {res.send('[GET]Saludos desde express')})
  .post('/hola', function (req, res) {res.send('[POST]Saludos desde express')})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
