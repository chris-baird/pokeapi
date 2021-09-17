const router = require("express").Router();

router.get("/", (req, res) => res.json({ message: "Ok" }));

module.exports = router;
