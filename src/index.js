/**
 * @fileoverview -
 * @version: 1.0.0
 * @since:2023-02-05
 */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression()); // compress all responses
app.use(cookieParser()); // parse cookies
app.use(express.json());
app.use(express.static('./public'));
app.use(helmet()); // secure express app
app.set('view engine', 'ejs');
app.set('trust proxy', 1); // trust first proxy

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  return res.send('Welcome to El Cart');
});

export default app;
