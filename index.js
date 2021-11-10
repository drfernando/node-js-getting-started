const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg')
const pool = new Pool({
  user: 'oiohqzcbynbpbp',
  host: 'ec2-34-232-144-162.compute-1.amazonaws.com:5432',
  database: 'deb16onbgnkepj',
  password: '64f733b754c01bd82efe7b889901a3c8ba1e040d7bd7a406f6058cc9a82d19a4',
  port: 5432,
})

const text = `
    CREATE TABLE IF NOT EXISTS "reportes_aa" (
	    "id" SERIAL,
	    "vi" VARCHAR(100) NOT NULL,
	    "a_name" VARCHAR(100) NOT NULL,
      "i_provider" VARCHAR(100) NOT NULL,
      "p_number" VARCHAR(100) NOT NULL,
      "c_direction" VARCHAR(100) NOT NULL,
      "r_failure" VARCHAR(100) NOT NULL,
      "f_description" VARCHAR(100) NOT NULL,
      "f_date" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("id")
    );`

pool.connect().query(text,(err,res) =>{
  console.log(err, res)
  pool.end()
})



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
    

    var message = req.body

    if(message.includes("VI") && message.includes("Nombre del agente") && message.includes("Proveedor de Internet")
    && message.includes("Numero de telefono contacto") && message.includes("Ubicación") 
    && message.includes("Falla") && message.includes("Cual es la afectación") 
    && message.includes("Desde cuando presenta la afectación")){

      var startIndex = message.indexOf("VI:") + "VI:".length
      var endIndex = message.indexOf("Nombre del agente:")
      var VIValue = message.substring(startIndex,endIndex).trim()
      VIValue = VIValue.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(VIValue)

      var startIndex = message.indexOf("Nombre del agente:") + "Nombre del agente:".length
      var endIndex = message.indexOf("Proveedor de Internet:")
      var Name = message.substring(startIndex,endIndex).trim()
      Name = Name.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Name)

      startIndex = message.indexOf("Proveedor de Internet:") + "Proveedor de Internet:".length
      endIndex = message.indexOf("Numero de telefono contacto:")
      var Provider = message.substring(startIndex,endIndex).trim()
      Provider = Provider.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Provider)

      startIndex = message.indexOf("Numero de telefono contacto:") + "Numero de telefono contacto:".length
      endIndex = message.indexOf("Ubicación:")
      var Number = message.substring(startIndex,endIndex).trim()
      Number = Number.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Number)

      startIndex = message.indexOf("Ubicación:") + "Ubicación:".length
      endIndex = message.indexOf("Falla:")
      var Dir = message.substring(startIndex,endIndex).trim()
      Dir = Dir.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Dir)

      startIndex = message.indexOf("Falla:") + "Falla:".length
      endIndex = message.indexOf("Cual es la afectación:")
      var Problem = message.substring(startIndex,endIndex).trim()
      Problem = Problem.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Problem)

      startIndex = message.indexOf("Cual es la afectación:") + "Cual es la afectación:".length
      endIndex = message.indexOf("Desde cuando presenta la afectación:")
      var Descrip = message.substring(startIndex,endIndex).trim()
      Descrip = Descrip.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Descrip)

      startIndex = message.indexOf("Desde cuando presenta la afectación:") + "Desde cuando presenta la afectación:".length
      endIndex = message.length
      var Date = message.substring(startIndex,endIndex).trim()
      Date = Date.replace(/(?:\r\n|\r|\n)/g, ' ')
      console.log(Date)      

      res.send('Procesado exitosamente: ' + VIValue + "/" + Name + "/" + Provider + "/" + Number + "/" + Dir + "/" + Problem + "/" + Descrip + "/" + Date)
    }else{
      res.send('Formato Invalido')
    }     
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

    
  