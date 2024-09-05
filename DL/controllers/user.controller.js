const userModel = require('../models/user.model');

async function create(data) {
    let newUser = await userModel.create(data);
    return newUser;
}

async function readOne(filter) {
    let user = await userModel.findOne(filter)
    return user
}
module.exports = { create, readOne}