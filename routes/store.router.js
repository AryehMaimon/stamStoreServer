const express = require("express");
const router = express.Router();
const storeService = require('../BL/store.service')

router.get("/all", async (req, res) => {
    try {
      const allItems = await storeService.getAllItems();
      res.send(allItems)
  
    } catch (err) {
      console.log(err);
      res.status(err.code || 500).send({ msg: err.msg || "something went wrong" });
    }
  })
  router.post("/", async (req, res) => {
    try {
       
      const newItem = await storeService.addNewItem(req.body);
      console.log("r2", )
      res.send(newItem)
      
    } catch (err) {
        console.log(err);
        console.log("r3", )
      res.status(err.code || 500).send({ msg: err.msg || "something went wrong" });
    }
  })





module.exports = router;