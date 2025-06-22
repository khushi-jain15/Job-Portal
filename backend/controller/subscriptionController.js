const Email = require('../model/Email');

// Subscribe a user
exports.handleSubscription = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if email already exists
    let existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Already subscribed!' });
    }

    // Create a new subscription entry
    const newEmail = new Email({ email });
    await newEmail.save();
    return res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// Check if email is already subscribed
exports.checkSubscription = async (req, res) => {
  const { email } = req.body;
  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(200).json({ message: 'Already subscribed!' });
    } else {
      return res.status(404).json({ message: 'Not subscribed' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
