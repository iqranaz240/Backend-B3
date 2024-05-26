const { auth } = require("../services/auth");
const {createUser, getUsers} = require("../services/createUser");

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

module.exports = {getRequest, newRequest, oldRequest, postRequest, getUser}