import express from 'express';
import bodyParser from 'body-parser';

import auth from './auth/auth';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', auth);

/**
 * [PORT]
 * @type {number}
 */
const port: number = 8888;

/**
 * [projectName]
 * @type {string}
 */
const projectName: string = 'TypeScript Express Backend'

app.get('/', function(req, res) {
	res.send('Hello World!! TypeScript Express.js');
});

app.listen(port, function(){
	console.log(`Start in ${port} for ${projectName}`);
});

