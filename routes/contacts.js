const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();


//contact page
router.get("/",(req, res) => {
  res.render("contact");
});

router.post("/", async (req, res) => {
  const data = req.body;

  const contact = await Contact.create(data);

  res.render("contact", { message: "Data saved successfully" });
});

module.exports = router;
