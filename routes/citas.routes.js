const router = require('express').Router()
const Appointment = require('../models/Appointment.model')
const { deleteAppointment } = require('./citas.routes')
const { updateAppointment } = require('./citas.routes')

router.delete('/citas/:id', (req, res) => {
  const { id } = req.params
  Appointment.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: 'deleted' })
    })
    .catch((err) => console.log(err))
})
// tambien recibir boddy
router.put('/update/:id', (req, res) => {
  const { service, date, name, email, id } = req.body.requestBody

  const newAppointment = Appointment.findByIdAndUpdate(
    id,
    {
      service: service,
      date: date,
      name: name,
      email: email
    },
    { new: true }
  )
    .then(() => {
      res.json(newAppointment)
    })
    .catch((err) => console.log(err))
})

router.get('/citas/:id', (req, res) => {
  const { id } = req.params
  Appointment.findById(id)
    .then((oneAppointment) => {
      res.json(oneAppointment)
    })
    .catch((err) => console.log(err))
})

module.exports = router
