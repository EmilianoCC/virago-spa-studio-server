const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const AppointmentSchema = new Schema(
  {
    service: {
      type: String,
      required: [true, 'El serivicio es requerido.'],
      enum: ['Maquillaje', 'Cavitacion', 'Uñas', 'Pestañas']
    },
    date: {
      type: String,
      required: [true, 'Necesitamos tu fecha.']
    },
    name: {
      type: String,
      required: [true, 'Nombre requerido.']
    },
    email: {
      type: String,
      required: [true, 'Correo electronico requerido.']
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
