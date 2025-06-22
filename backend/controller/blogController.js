const Blog = require('../model/blogModel');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      status: 'success',
      results: blogs.length,
      data: [
        ...blogs
      ],
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, image } = req.body;
    if (!title || !content || !author || !image) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide title, content, author, and image!',
      });
    }

    const newBlog = await Blog.create({
      title,
      content,
      author,  // Directly use the author string
      image,
    });

    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};


// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author, image } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, author, image }, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ data: { blog: updatedBlog } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'No blog found with that ID',
      });
    }

    res.status(204).send(); // 204: No Content, so no response body
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
