// BlogCard.jsx
import React from 'react';

const BlogCard = ({
  title,
  content,
  author,
  image,
  createdAt,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={`Image for ${title}`}
        className="w-full h-48 object-cover rounded-md mb-4"
        style={{ maxHeight: '12rem' }}
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">
        {content.length > 150 ? `${content.substring(0, 150)}...` : content}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-semibold">Author:</span> {author || 'Unknown'}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-semibold">Published:</span> {createdAt}
      </p>
    </div>
  );
};

export default BlogCard;
