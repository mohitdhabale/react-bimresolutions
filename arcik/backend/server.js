const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const e = require('express');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contactDetail', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "thetempdomain@gmail.com",
            pass: "ilvy kdsr likz xhsc"
        }
    })

    const mail = {
        from: "thetempdomain@gmail.com",
        to: `${email}`,
        subject: `New Contact Form Submission from ${name}`,
        text: `Phone: ${phone} \n\Email: ${email} \nMessage: ${message}`
    }

    try {
        await transporter.sendMail(mail);
        res.status(200).send("Email sent successfully");

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email");
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})