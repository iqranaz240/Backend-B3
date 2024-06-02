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
        console.error('Error getting users:', error);
        return error
    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return 'no user found';
        }
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return error;
    }
};

const deleteUser = async (email, update) => {
    try {
        const user = await User.updateOne(email, update);
        if (!user) {
            return 'no user found';
        }
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return error;
    }
};

const updateUser = async (email, update) => {
    try {
        const user = await User.updateOne({email}, update);
        if (!user) {
            return 'no user found';
        }
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return error;
    }
};

module.exports = {createUser, getUsers, findUserByEmail, deleteUser, updateUser}