const express = require("express");
const router = express.Router();
const sessionCTRL = require("../../controllers/api/sessions");
const session = require("../../models/session");

// all routes start with /api/sessions

// Post /api/sessions ---> create
router.post("/", sessionCTRL.createItem);

// Get request /api/sessions --> index
router.get("/", sessionCTRL.index);

// Get request /api/sessions/:id ---> show
router.get("/:id", sessionCTRL.show);

// Delete Request to /api/sessions/:id ---> delete
router.delete("/:id", sessionCTRL.delete);

module.exports = router;
