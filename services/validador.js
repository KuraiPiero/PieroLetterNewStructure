const Joi = require('@hapi/joi');

//Registration Validator
const validadorDeRegistro = data => {
  const esquema = Joi.object({
    primerNombre: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    apellido: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    claveDeUsuario: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(3)
      .max(30)
      .required(),
    contraseña: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    correo: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] }
    }),
    genero: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    direccion: Joi.string()
      .min(3)
      .max(30)
      .required()
  });
  return esquema.validate(data);
};

//Login Validator

const validadorDeSesion = data => {
  const esquema = Joi.object({
    claveDeUsuario: Joi.string()

      .min(3)
      .max(30)
      .required(),
    contraseña: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
  });
  return esquema.validate(data);
};

module.exports.validadorDeRegistro = validadorDeRegistro;
module.exports.validadorDeSesion = validadorDeSesion;
