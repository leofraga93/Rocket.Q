const express = require('express')
const QuestionController = require('./controllers/questionController')
const RoomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res)=> res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res)=> res.render("index", {page: 'create-pass'}))

route.get('/room/:room', RoomController.open)
route.post('/enter-room', RoomController.enter)

/* Formato que o formulario da modal tem de passar as info
route.post('/room/:room/:question/:action', (req, res)=> res.render("exemplo", {req})) 
*/
route.post('/question/create/:room',QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route