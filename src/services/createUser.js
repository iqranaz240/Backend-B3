const User = require('../models/user')
const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        console.log('User added:', user);
        return user;
    } catch (error) {
        console.error('Error adding user:', error);
        return error
    }
};

module.exports = createUser