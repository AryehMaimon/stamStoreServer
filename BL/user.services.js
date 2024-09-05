const userController = require("../DL/controllers/user.controller");

async function createNewUser(body) {
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    var phoneRegex = /^(?:0(?:[23489]|[57]\d)-\d{7})|(?:0(?:5[^7]|[2-4]|[8-9])(?:-?\d){7})$/;
    console.log('su1');
    
    const phoneIsexists = await userController.readOne({ phone: body.phone });
    console.log('su2');
    
    if (phoneIsexists) {
      throw { code: 408, msg: 'This phone already exists' };
    }
    let email = body.email
    let phone = body.phone
    let password = body.password
    console.log('su3');
    if (!email.includes("@") || !email.includes(".")) throw { code: 408, msg: 'Email is not proper' }
    if (!phoneRegex.test(phone)) throw { code: 408, msg: 'Phone is not proper' }
    if (password?.length < 8) throw { code: 408, msg: 'The password does not contain at least 8 characters' }
    if (!passwordRegex.test(password)) throw { code: 408, msg: 'The password does not contain at least 1 leter and 1 number' }
    console.log('su4');
  
    const newUser = await userController.create({ ...body , subscription: 'trial'});
       return newUser
  }
  
  async function getOneUser(phone) {
    let user = await userController.readOne({ phone: phone })
    if (!user) {
      throw { code: 408, msg: 'The phone is not exist' }
    }
    return user
  }

  module.exports = { createNewUser, getOneUser }
