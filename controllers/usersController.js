const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

const usersController = {
    // index: (req, res) => res.render('users/index'),
    create: (req, res) => res.render('users/register'),
    store: (req, res) => {
        const newUser = req.body;
        
        console.log(req.file);
        if(req.file) {
            const userImage = req.file.filename;
            users.push({id: users.length +1, ...newUser, password: bcrypt.hashSync(req.body.password, 10), image: userImage});
        } else {
            users.push({id: users.length +1, ...newUser, password: bcrypt.hashSync(req.body.password, 10), image: 'default.jpg'});
        }
        
        
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/');
    },
    edit: (req, res) => {
        const userId = parseInt(req.params.id);

        const userToEdit = users.find((usuario) => {
            return usuario.id === userId;
        });
        
        userToEdit ? res.render('users/profile', {userToEdit}) : res.render("users/not-found");
    },
    detail: (req, res) => {
        const userId = parseInt(req.params.id);
        const userProfile = users.find((usuario) => {
            return usuario.id === userId;
        });

        userProfile ? res.render('users/profile', {userProfile}) : res.render("users/not-found");

    },
    update: (req, res) => {
        const userInfo = req.body;
        const userIndex = users.findIndex((usuario) => {
            return usuario.id === parseInt(req.params.id);
        })
        
        if(req.file){
            userImage = req.file.filename;
            users[userIndex] = {...users[userIndex], image: userImage, ...userInfo};
        } else {
            users[userIndex] = {...users[userIndex], ...userInfo};

        }

    },
    destroy: (req, res) => {
        const userIndex = users.findIndex ((usuario) => {
			return usuario.id === parseInt(req.params.id);
		});

        users.splice(userIndex, 1);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/');
        
    } 

    
}

module.exports = usersController;