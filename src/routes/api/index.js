const router = require("express").Router();

router.get("/", (req, res) => res.json({ message: "Ok" }).status(200));

module.exports = router;
