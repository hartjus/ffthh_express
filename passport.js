const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const models = require('./models');

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'ffthh', // TODO: Use a real cert!
        issuer: 'axian.ffthh',
        audience: 'ffthh'
    }, async (jwtPayload, cb) => {
        // check the toke expiry
        const now = new Date();
        const expDate = new Date(jwtPayload.exp);

        if (expDate < now) {
            console.warn(`${now}:  Token expired at ${expDate}`);
            const error = 'Token has expired!';
            cb(error);
            return;
        }

        try {
            // token is good, now find the user
            const user = await models.user.findOne({ where: { email: jwtPayload.usr } })
            cb(null, user);
        } catch (e) {
            cb(e);
        }
    })
);
