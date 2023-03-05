const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment.model')

router.post('/create', (req, res, next) => {
  const { name, service, email, date } = req.body

  Appointment.create({ name, service, email, date })
    .then((response) => {
      res.json(response)
    })

    .catch((err) => console.log(err))
})

module.exports = router
