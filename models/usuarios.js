const mongoose = require('mongoose');

const formularioDeRegistro = mongoose.Schema({
  primerNombre: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  apellido: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  claveDeUsuario: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  contraseña: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  correo: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  genero: {
    type: String,
    required: true,
    min: 3
  },
  direccion: {
    type: String,
    required: true,
    max: 255,
    min: 10
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('formularioDeRegistro', formularioDeRegistro);
