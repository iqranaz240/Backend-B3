const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.jwtSecret;

const verifyToken = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    try {
        const decoded = jwt.verify(token, jwtSecret);
        if (!decoded.email) return res.status(401).json({ error: 'Invalid token' });
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

const checkAdmin = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    try {
        const decoded = jwt.verify(token, jwtSecret);
        const role = decoded.role;
        if(role !== 'admin') {
            return res.status(403).send({ auth: false, message: 'Unauthorized.' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

const checkValidUser = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    try {
        const decoded = jwt.verify(token, jwtSecret);
        if(req.query.email !== decoded.email) {
            return res.status(403).send({ auth: false, message: 'Unauthorized.' });
        }
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = {verifyToken, checkAdmin, checkValidUser}