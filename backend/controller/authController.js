const jwt = require('jsonwebtoken');
const User = require('./../model/userModel');

const signToken = (id) => {
	return jwt.sign({ id }, 'this-is-my-project', {
		expiresIn: 2 * 24 * 60 * 60 * 1000,
	});
};

const createSendToken = (user, statusCode, req, res) => {
	const token = signToken(user._id);

	res.cookie('jwt', token, {
		expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
		httpOnly: true,
	});

	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user,
		},
	});
};

exports.signup = async (req, res) => {
	try {
		const newUser = await User.create({
			email: req.body.email,
			password: req.body.password,
		});

		createSendToken(newUser, 201, req, res);
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				status: 'fail',
				message: 'Please provide email and password!',
			});
		}

		const user = await User.findOne({ email }).select('+password');

		if (!user || !(user.password === password)) {
			return res.status(401).json({
				status: 'fail',
				message: 'Incorrect email or password',
			});
		}

		createSendToken(user, 200, req, res);
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.logout = (req, res) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	});
	res.status(200).json({ status: 'success' });
};

exports.protect = async (req, res, next) => {
	try {
		let token;
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			token = req.headers.authorization.split(' ')[1];
		} else if (req.cookies.jwt) {
			token = req.cookies.jwt;
		}

		if (!token) {
			return res.status(401).json({
				status: 'fail',
				message: 'You are not logged in! Please log in to get access.',
			});
		}

		const decoded = await promisify(jwt.verify)(
			token,
			'this-is-my-project'
		);

		const currentUser = await User.findById(decoded.id);
		if (!currentUser) {
			return res.status(401).json({
				status: 'fail',
				message: 'The user belonging to this token no longer exists.',
			});
		}

		next();
	} catch (err) {
		res.status(401).json({
			status: 'fail',
			message: 'Authentication failed. Please try again.',
		});
	}
};
