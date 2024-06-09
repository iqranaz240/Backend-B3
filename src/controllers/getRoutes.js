const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { auth } = require("../services/auth");
const { createUser, getUsers, findUserByEmail, deleteUser, updateUser } = require("../services/user");

const jwtSecret = process.env.jwtSecret;
console.log(jwtSecret)

const getRequest = (req, res) => {
    res.send('My first app!')
};

const signup = async (req, res) => {
    const data = req.body;
    let token = null;
    data.password = bcrypt.hashSync(data.password, 8);
    try {
        const user = await createUser(data);
        console.log(jwtSecret)
        if (user.email) {
            token = await jwt.sign({ email: user.email, role: user.role }, jwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });
            console.log(token)
            res.send({ token: token, email: user.email, msg: 'successfully signed up' });
        } else {
            res.send({ token: token, msg: 'could not sign up', error: user })
        }
    }
    catch (e) {
        res.send({ token: token, msg: 'could not sign up', error: e })
    }
}

const login = async (req, res) => {
    try {
        const data = req.body;
        const user = await findUserByEmail(data.email);
        const authenticated = bcrypt.compareSync(req.body.password, user.password);
        if (authenticated) {
            res.status(200).send({ msg: 'login successful.' })
        }
        else {
            res.status(403).send({ msg: 'incorrect email/password.' })
        }
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while retrieving the user.' });
    }
}

const getUser = async (req, res) => {
    getUsers().then((users) => {
        res.send(users);
    })
}

const getUserByEmail = async (req, res) => {
    try {
        const user = await findUserByEmail(req.query.email);
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while retrieving the user.' });
    }
};

const deleteUserByEmail = async (req, res) => {
    try {
        const user = await deleteUser(req.query.email);
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while retrieving the user.' });
    }
};

const updateUserByEmail = async (req, res) => {
    try {
        const update = {
            $set: {
                name: req.body.name
            }
        };
        const user = await updateUser(req.query.email, update);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ error: 'An error occurred while updating the user.' });
    }
};


module.exports = { getRequest, signup, login, getUser, getUserByEmail, deleteUserByEmail, updateUserByEmail }