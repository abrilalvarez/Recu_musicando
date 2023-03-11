const express = require('express');
const path = require('path');
/*const methodOverride = require('method-override');*/

/*const mainRoutes = require('./routes/mainRoutes');*/
//const session = require('express-session');

const app = express();

// rutas api 
const cancionAPIRoutes = require('./routes/api/cancionAPIRoutes');
const generoAPIRoutes = require('./routes/api/generoAPIRoutes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
/*app.use(methodOverride('_method'));*/

/*app.use(session({secret: "Shh, es un secreto!"}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainRoutes);
app.use('/users',userRoutes);
app.use('/products',productsRoutes);
*/


// endpoint predeterminado de api para canciones
app.use('/canciones', cancionAPIRoutes);
// endpoint predeterminado de api para generos
app.use('/generos', generoAPIRoutes);

app.listen(process.env.PORT || 3001, () => console.log('Servidor activo-3001'));