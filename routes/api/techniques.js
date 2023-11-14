const express = require("express");
const router = express.Router();
const techniqueCTRL = require("../../controllers/api/techniques");

// get request to /api/techniques/getByName/:name  --> customname : getTechniqueByName
router.get("/getByName:name", techniqueCTRL.getTechniqueByName);

// post request to /api/techniques --> create
router.post("/", techniqueCTRL.createTechnique);

module.exports = router;
