import React, { useState } from 'react';
import demoImage from '../assets/demo.jpg';

const Blogs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: demoImage, text: 'This is text for image 1' },
    { id: 2, src: demoImage, text: 'This is text for image 2' },
    { id: 3, src: demoImage, text: 'This is text for image 3' },
    { id: 4, src: demoImage, text: 'This is text for image 4' },
    { id: 5, src: demoImage, text: 'This is text for image 5' },
    { id: 6, src: demoImage, text: 'This is text for image 6' },
    { id: 7, src: demoImage, text: 'This is text for image 7' },
    { id: 8, src: demoImage, text: 'This is text for image 8' },
    { id: 9, src: demoImage, text: 'This is text for image 9' },
    { id: 10, src: demoImage, text: 'This is text for image 10' },
    { id: 11, src: demoImage, text: 'This is text for image 11' },
    { id: 12, src: demoImage, text: 'This is text for image 12' },
  ];

  const handleClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
      {images.map((image) => (
        <div key={image.id} className="relative group">
          <img
            src={image.src}
            alt={`Blog ${image.id}`}
            className="w-full h-48 sm:h-64 object-cover transform transition duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
            onClick={() => handleClick(image.id)}
          />
        </div>
      ))}

      {/* Full-screen text overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 text-white flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-center">
            {images.find((img) => img.id === selectedImage).text}
          </p>
          <button
            className="absolute top-4 right-4 text-white text-lg sm:text-xl md:text-2xl bg-red-600 px-3 py-1 sm:px-4 sm:py-2 rounded"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
