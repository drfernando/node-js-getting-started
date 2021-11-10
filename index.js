const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded)
  .use(bodyParser.json)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/hola', function (req, res) {res.send('[GET]Saludos desde express')})
  .post('/hola', function (req, res) {
    
    console.log(req)   
    
    console.log(req.body)
    
    res.send('[GET]Saludos desde express')  
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
/* 
  VI:  093910
Nombre del agente: Zona Celular 2002
Proveedor de Internet: Inter
Numero de telefono contacto: 0414 1187638
Ubicación : Cua 
Municipio Urdaneta
Falla: cvsc
Cual es la afectación: No indica tecnología del equipo
Desde cuando presenta la afectación: desde el 09/11/2021 */
  
  function parseMessage(req, res) {

    console.log(req)   
    
    console.log(req.body)

    var message = req.body;
/* 
    if(message.includes("VI") && message.includes("Proveedor de Internet")
    && message.includes("Numero de telefono contacto") && message.includes("Proveedor de Internet")
    && message.includes("Ubicación") && message.includes("Falla")
    && message.includes("Cual es la afectación") 
    && message.includes("Desde cuando presenta la afectación")){
      res.send('Procesado exitosamente' + req.body)
    }else{
      res.send('Formato Invalido' + req.body)
    } */

    
  }