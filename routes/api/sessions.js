const express = require("express");
const router = express.Router();
const sessionCTRL = require("../../controllers/api/sessions");

// all routes start with /api/sessions

// Post /api/sessions ---> create 

router.post("/", sessionCTRL.createItem);

module.exports = router;
