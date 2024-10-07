import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // To manage the loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const navigate = useNavigate(); // Hook for navigation

  // Fetch images from the server
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12'); // Replace with your API
        const data = await response.json();

        const fetchedImages = data.map((img, index) => ({
          id: img.id,
          src: img.url,
          text: img.title,
          username: `User${index + 1}`,
          uploadDate: new Date().toLocaleDateString(),
          liked: false,
          likeCount: 0,
        }));

        setImages(fetchedImages);
        setLoading(false); // Set loading to false once images are fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false); // Also stop loading on error
      }
    };

    fetchImages();
  }, []);

  const handleClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  const handleLike = (id) => {
    if (!isLoggedIn) {
      // If user is not logged in, show an alert and redirect to signup page
      alert('You need to be logged in to like an image.');
      navigate('/signup');
      return;
    }

    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id
          ? {
              ...image,
              liked: !image.liked,
              likeCount: image.liked ? image.likeCount - 1 : image.likeCount + 1, // Update like count
            }
          : image
      )
    );
  };

  return (
    <div className="p-4 md:p-8">
      {/* Show loading spinner or text while fetching images */}
      {loading ? (
        <p className="text-center text-xl">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group border border-gray-300 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={`Blog ${image.id}`}
                className="w-full h-48 sm:h-64 object-cover transform transition duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                onClick={() => handleClick(image.id)}
              />
              <div className="p-2 bg-transparent flex items-center justify-between">
                <p className="text-sm font-semibold text-left">{image.username}</p>
                <p className="text-xs text-gray-500 text-center flex-1">{image.uploadDate}</p>
                <button
                  className={`flex items-center ${image.liked ? 'bg-blue-200' : 'bg-transparent'} text-sm font-semibold p-1 rounded`}
                  onClick={() => handleLike(image.id)}
                >
                  <span className="mr-1">{image.liked ? '❤️' : '🤍'}</span>
                  <span>{image.likeCount}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full-screen text overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 text-white flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-center">
            {images.find((img) => img.id === selectedImage)?.text}
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
