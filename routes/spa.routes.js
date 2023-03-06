const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment.model')
const User = require('../models/User.model')

router.post('/create', (req, res, next) => {
  const { name, service, email, date, id } = req.body
  console.log(req.body)

  Appointment.create({ name, service, email, date, id })
    .then((response) => {
      console.log(response._id)
      User.findByIdAndUpdate(id, {
        $push: { cita: response._id }
      })
    })
    .then((response) => res.json(response))

    .catch((err) => console.log(err))
})

router.get('/create', (req, res) => {
  Appointment.find()
    .then((appointment) => {
      res.json(appointment)
    })
    .catch((err) => console.log(err))
})
module.exports = router
