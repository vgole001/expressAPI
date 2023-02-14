// const mongoose = require('mongoose')

// const noteSchema = new mongoose.Schema({
//   content: {
//     type: String,
//     required: true,
//     minlength: 5
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   important: Boolean,
// })

// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// module.exports = mongoose.model('Note', noteSchema)


 
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 5
  },
  date: {
    type: Date,
    required: true
  },
  important: Boolean,
  user: [ 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // exported from user.js file in models
    }
  ]
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)


























