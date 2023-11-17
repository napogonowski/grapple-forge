const express = require("express");
const router = express.Router();
const techniqueCTRL = require("../../controllers/api/techniques");
// all routes start with /api/technique

// get request /api/technique/last -> get last item
router.get("/last", techniqueCTRL.getLastItem);

// get request to /api/techniques/getByName/:name  --> customname : getTechniqueByName
router.get("/getByName:name", techniqueCTRL.getTechniqueByName);

// post request to /api/techniques --> create
router.post("/", techniqueCTRL.createTechnique);

module.exports = router;
