const express = require('express');
const mainRoutes = require('./routes/mainRoutes');

// App
const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(__dirname + '/public'));

// Template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', mainRoutes);

// Server
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));