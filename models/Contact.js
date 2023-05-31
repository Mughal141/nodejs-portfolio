const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
})

const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact;