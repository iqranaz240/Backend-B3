const { auth } = require("../services/auth");

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

const postRequest = (req, res) => {
    const data = req.body;
    const authState = auth(data);
    res.send('This is post request: '+ authState);
}

module.exports = {getRequest, newRequest, oldRequest, postRequest}