const mongoose = require('mongoose');
const esquimaDeLibro = mongoose.Schema({
  Titulo: String,
  Autor: String,
  ISBN: String,
  Categoria: String,
  FechaDeLanzamiento: String,
  Sipnosis: String,
  Formato: String,
  Precio: Number,

  PlatforOfSelling: String,
  img: String
});

module.exports = mongoose.model('Libro', esquimaDeLibro);
