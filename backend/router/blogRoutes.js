const express = require('express');
const blogController = require('./../controller/blogController');
const router = express.Router();

// Blog routes
router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.patch('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
