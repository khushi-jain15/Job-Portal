const Internship = require('../model/internModel');
const router = require('../router/userRoutes');

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

exports.create = async (req, res) => {
	try {
		const { image, title, applyLink } = req.body;
		if (!image || !title || !applyLink) {
			return res.status(400).json({
				status: 'fail',
				message: 'Please provide image, title and applyLink!',
			});
		}
		const newInternship = await Internship.create({
			image,
			title,
			applyLink,
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

exports.update = async (req, res) => {
  try {
    const { _id, image, title, applyLink } = req.body;
	console.log(req.body);
	
    if (!image && !title && !applyLink) {
      return res.status(400).json({
        status: "fail",
        message: "Please update atleast one of image, title or applyLink!",
      });
    }
    const newInternship = await Internship.findByIdAndUpdate(_id, {
      image,
      title,
      applyLink,
    });

    res.status(201).json({
      status: "success",
      data: {
        internship: newInternship,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

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
