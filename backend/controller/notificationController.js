// backend/controllers/notificationController.js
const nodemailer = require('nodemailer');
const Notification = require('../model/notificationModel');
const Email = require('../model/Email'); // Import the Email model


// Fake email list (replace with your database logic)
// const emailList = ['somnath.kaushik_cs21@gla.ac.in','somnath21052002kaushik@gmail.com'];

//GMAIL pe app password generate karna padega, 2 step verification on karna padega
//Gmail -> Manage your google account -> Security -> App Passwords -> Select App -> Select Device -> Generate
//App password generate karne ka, app name: Mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'example@example.com', //email address for which you have generated app password
    pass: 'ervp cezr ykpw tyzq', //app password
  },

});


const sendNotification = async (req, res) => {
  const { title, message, image, link } = req.body;

  if (!title || !message) {
    return res.status(400).json({ message: 'Title and message are required' });
  }

  try {
    // Fetch all subscribed emails from the database
    const emails = await Email.find({});
    const emailList = emails.map(emailEntry => emailEntry.email); // Map to get the email addresses

    const emailSubject = `New Update: ${title}`;
    const emailBody = `
      <h1>${title}</h1>
      <p>${message}</p>
      ${image ? `<img src="${image}" alt="Notification Image" style="max-width:100%;" />` : ''}
      ${link ? `<p>Read more: <a href="${link}" target="_blank">${link}</a></p>` : ''}
    `;

    // Send notifications to all emails
    await Promise.all(
      emailList.map((email) =>
        transporter.sendMail({
          from: '"Khushi Jain" <example@gmail.com>',
          replyTo: 'example@noreply.com',
          to: email,
          subject: emailSubject,
          html: emailBody,
        })
      )
    );

    // Save notification to the database (optional)
    const notification = new Notification({ title, message, image, link });
    await notification.save();

    res.json({ message: 'Notifications sent successfully!' });
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ message: 'Error sending notifications', error: error.message });
  }
};

module.exports = { sendNotification };