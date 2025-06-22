const Internship = require('../model/internModel');
const router = require('../router/userRoutes');

// Get all internships
exports.getAll = async (req, res) => {
  try {
    const internships = await Internship.find();

    res.status(200).json({
      status: 'success',
      results: internships.length,
      data: {
        internships,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Create a new internship
exports.create = async (req, res) => {
  try {
    const { image, title, paymentScript, description } = req.body; // Updated to paymentScript
    if (!image || !title || !paymentScript || !description) { // Check for paymentScript instead of applyLink
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide image, title, paymentScript, and description!',
      });
    }
    const newInternship = await Internship.create({
      image,
      title,
      paymentScript, // Use paymentScript field
      description,
    });

    res.status(201).json({
      status: 'success',
      data: {
        internship: newInternship,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Update an internship
exports.update = async (req, res) => {
  try {
    const { _id, image, title, paymentScript, description } = req.body; // Updated to paymentScript
    console.log(req.body);

    if (!image && !title && !paymentScript && !description) { // Check for paymentScript instead of applyLink
      return res.status(400).json({
        status: "fail",
        message: "Please update at least one of image, title, paymentScript, or description!",
      });
    }

    const updatedInternship = await Internship.findByIdAndUpdate(
      _id,
      {
        image,
        title,
        paymentScript, // Use paymentScript field for updating
        description,
      },
      { new: true }
    );

    res.status(201).json({
      status: "success",
      data: {
        internship: updatedInternship,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete an internship
exports.delete = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({
        status: 'fail',
        message: 'No internship found with that ID',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
