const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment.model')
const User = require('../models/User.model')

router.post('/create', async (req, res, next) => {
  const { name, service, email, date, id } = req.body
  console.log(req.body)
  const citas = await Appointment.create({ name, service, email, date, id })
  await User.findByIdAndUpdate(id, { $push: { cita: citas._id } })
  console.log(res.json(citas))
})

router.post('/update/:citaId', async (req, res, next) => {
  const { name, service, email, date, id } = req.body
  const { citaId } = req.params
  console.log(req.body)
  const citas = await Appointment.findByIdAndUpdate(
    citaId,
    { name, service, email, date, id },
    { new: true }
  )
  await User.findByIdAndUpdate(id, { $push: { cita: citas._id } })
  console.log(res.json(citas))
})

router.get('/citas/:userid', (req, res) => {
  const { userid } = req.params
  User.findById(userid)
    .populate('cita')
    .then((user) => {
      res.json(user.cita)
    })
    .catch((err) => console.log(err))
})

//mandar id, buscar con find
module.exports = router
