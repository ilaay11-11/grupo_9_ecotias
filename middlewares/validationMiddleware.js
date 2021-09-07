const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('first_name').notEmpty().withMessage('Tienes que completar el nombre'),
    body('last_name').notEmpty().withMessage('Tienes que completar el apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    body('password')
        .notEmpty().withMessage('Tienes que completar la contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
];

module.exports = validations;