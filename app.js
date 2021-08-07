const express = require('express');
const session = require('express-session');
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const bcrypt = require('bcryptjs');
const methodOverride =  require('method-override');
// const logger = require('morgan');

// App
const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); 

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(session({
    secret: 'Ecotias',
    resave: false,
    saveUninitialized: false
}));
app.use(userLoggedMiddleware);
app.use(express.static(__dirname + '/public')); // Static files
app.use(express.urlencoded({ extended: false })); // URL Parser
app.use(express.json()); // JSON Parser
// app.use(logger('dev')); // Request logger
app.use(methodOverride('_method')); // PUT & DELETE methods


// Template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', mainRoutes); // Main
app.use('/usuarios', usersRoutes); // Users
app.use('/productos', productsRoutes); // Products

app.use((req, res, next) => res.render('users/not-found')); // Error view

// Server
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));