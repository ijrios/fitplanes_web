const express = require('express'); 
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session')

// Inizializaciones
const app = express();

// Configuraciones
app.set('puerto', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // decirle a node que la carpeta views está ahí 
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', 
}));
app.set('view engine', '.hbs');

// Middlewares (funciones)
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

// Variables globales

// Rutas  
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));


// El servidor está escuchando
app.listen(app.get('puerto'), () => {
    console.log('Servidor en puerto', app.get('puerto'));
});