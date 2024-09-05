const storeModel = require('../models/store.model');

async function create(data) {
    let newItem = await storeModel.create(data);
    return newItem;
}

async function readOne(filter) {
    let item = await storeModel.findOne(filter)
    return item
}
const read = async (filter) => {
    return await storeModel.find(filter)
}
module.exports = { create, readOne, read}