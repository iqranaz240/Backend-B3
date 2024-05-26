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

const getUsers = async () => {
    try {
        const allUsers = await User.find();
        return allUsers;
    } catch (error) {
        console.error('Error getting user:', error);
        return error
    }
}

module.exports = {createUser, getUsers}