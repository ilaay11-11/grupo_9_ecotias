const { body } = require('express-validator');
let db = require('../database/models');
const path = require('path');

const validations = [
    body('first_name').notEmpty().withMessage('Tienes que completar el nombre').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('last_name').notEmpty().withMessage('Tienes que completar el apellido').bail()
    .isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email')
        .notEmpty().withMessage('Tienes que completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail()
        .custom(userEmail=> {
            return new Promise((resolve, reject) => {
                db.Usuario.findOne({ where: { email: userEmail } })
                .then(emailExist => {
                    if (emailExist !== null){
                        reject(new Error('Este usuario ya está registrado'))
                    } else {
                        resolve(true)
                    }
                });
                
            });
        }),
    body('password')
        .notEmpty().withMessage('Tienes que completar la contraseña')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('userImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg','.png', '.gif'];
        
        if(file) {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de imágen permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
];

module.exports = validations;