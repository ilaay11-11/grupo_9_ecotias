const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name').notEmpty().withMessage('El producto debe tener un nombre').bail()
    .isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('price').notEmpty().withMessage('EL producto debe tener un precio'),
    body('description').notEmpty().withMessage('El producto debe tener una descripción').bail()
    .isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('product_image').custom((value, { req }) => {
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