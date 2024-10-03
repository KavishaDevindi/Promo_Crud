// emailService.js

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dapir15091@inpsur.com",
    pass: "",
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: "dapir15091@inpsur.com",
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Failed to send email:", error.message);
  }
};

module.exports = { sendEmail };
