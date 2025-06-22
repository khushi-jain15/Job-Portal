const express = require("express");
const internController = require("./../controller/internController");
const router = express.Router();

router.get("/", internController.getAll);
router.post("/create", internController.create);
router.patch("/:id", internController.update);
router.delete("/:id", internController.delete);

module.exports = router;
