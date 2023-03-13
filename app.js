const express = require('express');
const path = require('path');
const app = express();

// rutas api 
const cancionAPIRoutes = require('./routes/api/cancionAPIRoutes');
const generoAPIRoutes = require('./routes/api/generoAPIRoutes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// endpoint predeterminado de api para canciones
app.use('/canciones', cancionAPIRoutes);
// endpoint predeterminado de api para generos
app.use('/generos', generoAPIRoutes);

app.listen(process.env.PORT || 3001, () => console.log('Servidor activo-3001'));