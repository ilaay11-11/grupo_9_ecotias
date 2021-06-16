const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile('/index.html', {root: 'views'}));
app.get('/producto', (req, res) => res.sendFile('/productDetail.html', {root: 'views'}));
app.get('/carrito', (req, res) => res.sendFile('/productCart.html', {root: 'views'}));
app.get('/login', (req, res) => res.sendFile('/login.html', {root: 'views'}));
app.get('/registro', (req, res) => res.sendFile('/register.html', {root: 'views'}));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));