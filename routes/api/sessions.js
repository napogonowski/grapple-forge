const express = require("express");
const router = express.Router();
const sessionCTRL = require("../../controllers/api/sessions");

// all routes start with /api/sessions

// Post /api/sessions ---> create
router.post("/", sessionCTRL.createItem);

// Get request /api/sessions --> index
router.get("/", sessionCTRL.index);

router.get("/last", sessionCTRL.getLastItem);

// Get request /api/sessions/:id ---> show
// router.get("/:id", sessionCTRL.show);
// Get request /api/sessions/:id -> show
router.get("/:id", sessionCTRL.show);

// // custom route for getting the last item -
// // Get request /api/session/last -> get last item
// router.get("/last", sessionCTRL.getLastItem);

// Delete Request to /api/sessions/:id ---> delete
router.delete("/:id", sessionCTRL.delete);

// Put request to /api/session/:id ---> update
router.put("/:id", sessionCTRL.update);

module.exports = router;
