const express = require("express");
const router = express.Router();
const artist = require("./artist");
const cartist = require("../controllers/artist");

router.use("/artist", artist);
router.get("/update-success", cartist.notif.notifUpdateSuccess);
router.get("/create-success", cartist.notif.notifUpdateSuccess);
router.get("/delete-success", cartist.notif.notifDeleteSuccess);

module.exports = router;
