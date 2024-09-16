const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "demarco.wintheiser53@ethereal.email", // Ethereal email user
    pass: "68eYBYq33WUh3wr75E", // Ethereal email password
  },
});

// POST route to handle form submission
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send email with the form data
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender's email and name from the form
      to: "samueltuoyo9082@gmail.com", // recipient
      subject: subject, // email subject from the form
      text: message, // plain text message from the form
      html: `<p>${message}</p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error occurred: ", error.message);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
