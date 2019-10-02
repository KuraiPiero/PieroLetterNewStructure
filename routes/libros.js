const express = require('express');
const router = express.Router();
const Stock = require('../models/libros');

//!Post
router.post('/', async (req, res) => {
  const Libro = new Stock({
    Titulo,
    Autor,
    ISBN,
    Categoria,
    FechaDeLanzamiento,
    Sipnosis,
    Formato,
    Precio,
    PlatforOfSelling,
    img
  } = req.body)
  });
  console.log(Libro);
  try {
    const LibrosSave = await Libro.save();
    res.json({
      LibrosSave
    });
    console.log('Registrado En Libros');
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//!consultar Libros
router.get('/', async (req, res) => {
  try {
    const Libros = await Stock.find();
    res.json(Libros);
  } catch (err) {
    res.json({
      message: err
    });
  }
});


//Buscar un libro en especifico
router.get('/:LibroId', async (req, res) => {
  try {
    const Libro = await Stock.findById(req.params.LibroId);
    res.json(Libro);
  } catch (err) {
    res.json({
      message: err
    });
  }
});
//Borrar un libro
router.delete('/:LibroId', async (req, res) => {
  try {
    const removerLibro = await Stock.remove({
      _id: req.params.LibroId
    });
    res.json(removerLibro);
  } catch (err) {
    res.json({
      message: err
    });
  }
});
//Actualizar un libro
router.patch('/:LibroId', async (req, res) => {
  const {
    Titulo,
    Autor,
    ISBN,
    Categoria,
    FechaDeLanzamiento,
    Sipnosis,
    Formato,
    Precio,
    PlatforOfSelling,
    img
  } = req.body;
  try {
    const actualizarLibro = await Stock.updateOne(
      {
        _id: req.params.LibroId
      },
      {
        $set: {
          Titulo,
          Autor,
          ISBN,
          Categoria,
          FechaDeLanzamiento,
          Sipnosis,
          Formato,
          Precio,
          PlatforOfSelling,
          img
        }
      }
    );
    res.json(actualizarLibro);
  } catch (error) {
    res.json({
      message: err
    });
  }
});

module.exports = router;
