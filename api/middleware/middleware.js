require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null;

    if (token) {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const hasPermission = (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null;

    if (token) {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
module.exports = {authenticateJWT};