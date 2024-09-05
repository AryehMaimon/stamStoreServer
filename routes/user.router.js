const express = require("express");
const router = express.Router();
const userService = require('../BL/user.services')

router.post('/register', async (req, res) => {
  try {
    const body = req.body
    console.log('r1');
    const answer = await userService.createNewUser(body);
    console.log('r2');
    
    res.send(answer);
}
catch (err) {
  console.log(err);
  res.status(err.code || 500).send({ msg: err.msg || "something went wrong" });
}
})
router.get("/:phone", async (req, res) => {
    try {
      console.log(req.params.phone);
      const phone = req.params.phone;
      const user = await userService.getOneUser(phone);
      console.log("r1", user)
      res.send(user)
  
    } catch (err) {
      console.log(err);
      res.status(err.code || 500).send({ msg: err.msg || "something went wrong" });
    }
  })


  module.exports = router;
