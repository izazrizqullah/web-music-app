const express = require("express");
const router = express.Router();
const cartist = require("../controllers/artist");
const upload = require("../middleware/storage");

router.get("/", cartist.create.getCreate);
router.post(
  "/",
  upload.fields([
    { name: "imageurl", maxCount: 1 },
    { name: "sampleurl", maxCount: 1 },
  ]),
  cartist.create.create
);
router.get("/getall", cartist.get.getAll);
router.put(
  "/update/:id",
  upload.fields([
    { name: "imageurl", maxCount: 1 },
    { name: "sampleurl", maxCount: 1 },
  ]),
  cartist.edited.edited
);
router.get("/edit/:id", cartist.edited.getEdit);
router.delete("/delete/:id", cartist.deleted.delete);

module.exports = router;
