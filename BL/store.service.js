
const storeController = require('../DL/controllers/store.controller')


async function getAllItems() {
    let filter = { isActive: true }
    console.log('s1');
    
    let items = await storeController.read(filter)
    console.log('s2');
    if (!items) {
        throw { code: 408, msg: 'The phone is not exist' }
    }
    return items
}

async function addNewItem(data) {
    let item = await storeController.create(data)
    if (!item) {
        throw { code: 408, msg: 'The item is not exist' }
    }
    return item
}

module.exports = { getAllItems, addNewItem }