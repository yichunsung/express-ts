import express from 'express';
import bodyParser from 'body-parser';

interface SendJson {
	readonly status: number;
	message: string;
	data: any;
}

/**
 * [Router description]
 */
const auth = express.Router();

/**
 * [use description]
 * @param {true})} bodyParser.urlencoded({extended [description]
 */
auth.use(bodyParser.urlencoded({extended:true}));

/**
 * [use description]
 * @param {[type]} bodyParser.json() [description]
 */
auth.use(bodyParser.json());

auth.post('/register', function(req, res) {
	let mail: string = req.body.mail;
	let password: string = req.body.password;

	const error400: SendJson = {
		status: 400,
		message: 'mail and password is required.',
		data: null
	}

	const success200: SendJson = {
		status: 200,
		message: 'Data is ok',
		data: {
			mail: mail
		}
	}

	if (mail && password) {
		res.status(200).json(success200);
	} else {
		res.status(400).json(error400);
	}
});


export default auth;
