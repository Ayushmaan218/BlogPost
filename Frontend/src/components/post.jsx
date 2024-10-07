import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility, set the app element

const Post = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="p-6 border border-gray-200 rounded-lg max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Post</h1>
      <div className="text-base">
        <p>This is where your posts will be displayed.</p>
        <button
          onClick={openModal}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create New Post
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create Post"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="mt-6">
          <CreatePostModal />
        </div>
      </Modal>
    </div>
  );
};

const CreatePostModal = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Image:', image);
    console.log('Text:', text);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="image">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500"
        />
        {image && <img src={image} alt="Preview" className="mt-4 max-w-full h-auto" />}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="text">
          Post Text
        </label>
        <textarea
          id="text"
          value={text}
          onChange={handleTextChange}
          rows="4"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Post;
