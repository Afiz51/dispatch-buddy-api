require("dotenv").config();

module.exports = {
  service: "gmail",
  secure: false,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
};
