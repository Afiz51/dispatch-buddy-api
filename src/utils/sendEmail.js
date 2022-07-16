const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");
console.log(process.env.EMAIL_USERNAME);

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail(
    {
      from: process.env.EMAIL_USERNAME, // sender address
      to,
      subject,
      html,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};

module.exports = sendEmail;
