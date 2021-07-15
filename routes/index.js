const express = require("express");
const router = express.Router();
const {
  fetchremoteinfo,
  showremoteinfo,
  deleteremoteinfo,
} = require("../controller/post");

router.get("/fetchpost", fetchremoteinfo);

router.get("/getpost", showremoteinfo);

router.get("/deletepost", deleteremoteinfo);

module.exports = router;
