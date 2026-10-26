require("dotenv").config();
const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

// Optional: save messages to MongoDB when MONGODB_URI is set
let Message = null;
if (process.env.MONGODB_URI) {
  const mongoose = require("mongoose");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err.message));
  Message = mongoose.model(
    "Message",
    new mongoose.Schema(
      { name: String, email: String, message: String },
      { timestamps: true }
    )
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
const escapeHtml = (t) =>
  String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

app.post("/api/contact", limiter, async (req, res) => {
  const { name, email, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot: bots fill this field
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email || "")) {
    return res.status(400).json({ error: "Enter your name, a valid email and a message." });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: "One of the fields is too long." });
  }
  try {
    if (Message) await Message.create({ name, email, message });

    const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== "your-gmail-app-password";

    if (hasEmailConfig) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      });
      res.json({ ok: true, sent: true });
    } else {
      console.log(`\n📨 [CONTACT FORM RECEIVED - DEV MODE]`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log(`Note: Configure EMAIL_USER and EMAIL_PASS in .env to deliver real emails to inbox.\n`);
      res.json({ ok: true, devMode: true, note: "Message logged successfully (configure EMAIL_PASS in .env for inbox delivery)." });
    }
  } catch (err) {
    console.error("Contact error:", err.message);
    res.status(500).json({ error: "The message could not be sent: " + err.message });
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
