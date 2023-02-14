// const express = require("express")
// const app = express()
// const cors = require("cors")
// require('dotenv').config()

// const Note = require("./models/note")

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next() // execute the next middleware in the middleware stack
// }

// const errorHandler = (error, request, response, next) => {
//   console.error("error: ",error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   }
//   next(error)
// }

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'Unnknown endpoint. Make sure you type the correct url.' })
// }

// // important order matters here
// app.use(cors())
// app.use(express.json())
// app.use(requestLogger)
// app.use(express.static('build'))

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (body.content === undefined) {
//     return response.status(400).json({ error: 'content missing' })
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   })

//   note.save().then(savedNote => {
//     response.json(savedNote)
//   })
// })

// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//     .then(result => {
//         response.status(204).end()
//     })
//     .catch(error => next(error))
// })


// // this middleware should be defined here
// // defining it on top would result to not recognising any api path
// app.use(unknownEndpoint)
// app.use(errorHandler)

// const PORT = process.env.PORT

// app.listen(PORT, () => {
//   console.log(`Server is listening on port: ${PORT}`)
// })


////////////////////////////////////////////

// require('dotenv').config()

// const express = require("express")
// const fortune = require('./models/fortune')

// console.log("Fortune is: ",fortune.fortuneCookies())

// const app = express()

// const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//   res.type('text/plain')
//   res.send('Meadowlark Travel');
// })
 
// app.get('/about', (req, res) => {
//   res.type('text/plain')
//   res.send('About Meadowlark Travel')
// })
 

//custom 404 page
// app.use((req, res) => {
//   res.type("text/plain")
//   res.status(404)
//   res.send("404 Custom Not found")
// })

//custom 500 page
// app.use((err, req, res, next) => {
//   console.error(err.message)
//   res.type("text/plain")
//   res.status(500)
//   res.send("500 Custom Server-Error")
// })


// app.use((req, res, next) => {
//   console.log(`processing request for ${req.url}....`)
//   next()
//  })
//  app.use((req, res, next) => {
//   console.log('terminating request')
//   res.send('thanks for playing!')
//   // note that we do NOT call next() here...this terminates the request
//  })
 

// app.listen(port, ()=>console.log(`Express started on port ${port}`))


/////////////////////////////////////////////////////////////////////////////

// const { application } = require("express")
// const express = require("express")
// const cors = require("cors")
// require('dotenv').config()

// const app = express()

// const Note = require('./models/note')

// const port = process.env.PORT || 3000

// const requestLogger = (req, res, next) => {
//   console.log("Method: ", req.method)
//   console.log("Path: ", req.path)
//   console.log("Body: ", req.body)
//   next()
// }

// // to be used in middleware
// const errorHandler = (error, req, resp, next) => {
//   console.log("Error ", error.name)
//   if (error.name === "CastError") {
//     resp.status(404).send({ error:"Mailformed id" })
//   }
//   next(error)
// }

// const unknownEndpoint = (req, res) => {
//   return res.status(404).send({ error:"Unkown endpoint"})
// }

// app.use(cors())
// app.use(express.json()) // needed in order to log body
// app.use(requestLogger)

// app.get("/foo", (request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" })
//   response.end("Testing enpoints.")
// })


// app.post("/api/notes", (request, response) => {
//   const body = request.body
//   console.log("body us", body)
  
//   const note = new Note({
//     "content": body.content,
//     "important":body.important
//   })

//   note.save()
//   .then(savedNote => response.json(savedNote))
// })

// app.get("/api/notes", (request, response) => {
//   Note.find({})
//     .then(notes => response.json(notes))
// })

// app.get("/api/notes/:id", (request, response, next) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })


// app.delete("/api/notes/:id", (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//     .then(result => {
//       console.log("result",result)
//       response.status(204).end()
      
//     })
//     .catch(error => next(error))
// })

// app.use(unknownEndpoint)
// app.use(errorHandler)

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}:`)
// })


/////////////////////////////////////////


const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})