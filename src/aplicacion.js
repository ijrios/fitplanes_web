import express from 'express';
import path from 'path';
import morgan from 'morgan';
import exphbs from "express-handlebars";
import session from "express-session";
import methodOverride from "method-override";
import flash from "connect-flash";
import passport from "passport";

// Inizializaciones
const app = express();
// Configuraciones
app.use(morgan('dev'));

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



export default app;
