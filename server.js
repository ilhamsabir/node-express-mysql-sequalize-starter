import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './docs/index.json'
// Import connection
import db from './config/db';
// Import router
import Router from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use cors
app.use(cors());

// Testing database connection
try {
	db.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

// api
app.use('/api', Router);
// docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log('Api running at ', port);
});
