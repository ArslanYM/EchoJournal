const express = require("express");
const { User, Blog } = require("../db");
const router = express.Router();

router.get("/me", (req, res) => {});

module.exports = router;
