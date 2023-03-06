const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const AppointmentSchema = new Schema(
  {
    service: {
      type: String,
      required: [true, 'Service is required.'],
      enum: ['maquillaje', 'cavitacion']
    },
    date: {
      type: String,
      required: [true, 'Date is required.']
    },
    name: {
      type: String,
      required: [true, 'Name is required.']
    },
    email: {
      type: String,
      required: [true, 'Email is required.']
    },
    id: {
      type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true
  }
)

const Appointment = model('Appointment', AppointmentSchema)

module.exports = Appointment
