const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.text())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/hola', function (req, res) {res.send('[GET]Saludos desde express')})
  .post('/hola', function (req, res) {
    
    console.log(req)   
    
    console.log(req.body)

    var message = req.body

    if(message.includes("VI") && message.includes("Proveedor de Internet")
    && message.includes("Numero de telefono contacto") && message.includes("Ubicación") 
    && message.includes("Falla") && message.includes("Cual es la afectación") 
    && message.includes("Desde cuando presenta la afectación")){
      var startIndex = message.indexOf("VI:") + "VI:".length()
      var endIndex = message.indexOf("Proveedor de Internet:")
      var VIValue = message.substring(startIndex,endIndex).trim()
      console.log(VIValue)
      startIndex = message.indexOf("Proveedor de Internet:") + "Proveedor de Internet:".length()
      endIndex = message.indexOf("Numero de telefono contacto:")
      var Provider = message.substring(startIndex,endIndex).trim()
      console.log(Provider)
      startIndex = message.indexOf("Numero de telefono contacto:") + "Numero de telefono contacto:".length()
      endIndex = message.indexOf("Ubicación:")
      var Number = message.substring(startIndex,endIndex).trim()
      console.log(Number)
      startIndex = message.indexOf("Ubicación:") + "Ubicación:".length()
      endIndex = message.indexOf("Falla:")
      var Dir = message.substring(startIndex,endIndex).trim()
      console.log(Dir)
      startIndex = message.indexOf("Falla:") + "Falla:".length()
      endIndex = message.indexOf("Cual es la afectación:")
      var Problem = message.substring(startIndex,endIndex).trim()
      console.log(Problem)
      startIndex = message.indexOf("Cual es la afectación:") + "Cual es la afectación:".length()
      endIndex = message.indexOf("Desde cuando presenta la afectación:")
      var Descrip = message.substring(startIndex,endIndex).trim()
      console.log(Descrip)
      startIndex = message.indexOf("Desde cuando presenta la afectación:") + "Desde cuando presenta la afectación:".length()
      endIndex = message.length()
      var Date = message.substring(startIndex,endIndex).trim()
      console.log(Date)      

      res.send('Procesado exitosamente')
    }else{
      res.send('Formato Invalido')
    }     
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

    
  