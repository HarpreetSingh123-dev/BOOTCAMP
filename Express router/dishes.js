const express = require("express")

const router = express.Router();

router.route('/').get((req,res)=>{

    res.end("hello there i am samosa")
})

module.exports = router