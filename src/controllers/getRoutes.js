const { auth } = require("../services/auth");
const {createUser, getUsers, findUserByEmail, deleteUser, updateUser} = require("../services/user");

const getRequest = (req, res) => {
    res.send('My first app!')
};

const newRequest = (req, res) => {
    res.send('This is my new request!')
};

const oldRequest = (req, res) => {
    console.log(req.body)
    res.send('This is my old request!')
};

const postRequest = async (req, res) => {
    const data = req.body;
    createUser(data).then((user) => {
        res.send('This is post request: '+ user);
    });
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


module.exports = {getRequest, newRequest, oldRequest, postRequest, getUser, getUserByEmail, deleteUserByEmail, updateUserByEmail}