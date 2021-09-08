import passport from 'passport'
import passportJWT from 'passport-jwt'
import User from '../model/user'
require('dotenv').config();

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

let strategy = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
	try {
		const user = await User.findAll({ where: { id: jwt_payload.id } });
		console.log('user: ', user);

		if (user) {
			next(null, user);
		} else {
			next(null, false);
		}

	} catch (err) {
		next(null, false);
	}

});

passport.use(strategy);

export default passport;
