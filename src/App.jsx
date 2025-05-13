import { useState } from "react";

import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  // setting up use state hooks//

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && username && emailId && photo) {
      setSubmitted(true);
    } else {
      alert("Please fill all the fields and upload a photo");
    }
  };
  // setting up event listener for all the fields not filled condition and generating alert//

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // event listener for photo uploading//

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-600 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center items-center text-blue-700">
              <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
              <p className="text-sm">
                Secure your spot at next year's biggest coding conference
              </p>
              <div className="  flex justify-center items-center">
                <img
                  className="h-12 hover:animate-spin"
                  src="./react.jpg"
                ></img>
              </div>
            </h2>
            {/* heading section */}

            <div>
              <label className="block text-gray-700 mb-1">
                Upload Avatar/Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
              />
            </div>
            {/* uploading photo/avatar */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
              />
            </div>
            {/* uploading name */}

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Email ID"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
              />
            </div>
            {/* uploading email */}

            <div>
              <label className="block text-gray-700 mb-1">
                GitHub Username
              </label>
              <input
                type="text"
                placeholder="GitHub Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
              />
            </div>
            {/* uploading  github username */}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Generate My Ticket
            </button>
          </form>
        ) : (
          // Creating ticket Button//

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Your Ticket</h2>
            <div className="bg-blue-100 rounded-xl p-4">
              {photo && (
                <img
                  src={photo}
                  alt="Uploaded"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <p>
                <strong>Full Name:</strong> {fullName}
              </p>
              <p>
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Email ID:</strong> {emailId}
              </p>
            </div>

            {/* /setting up ticket  */}
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800"
              onClick={() => {
                setSubmitted(false);
                setPhoto(null);
              }}
            >
              Generate Another
            </button>
            {/* Creating a button  to generate another ticket */}
          </div>
        )}
      </div>
      <h3 className="flex justify-center items-center">
        Made With
        <img className="h-12 hover:animate-spin" src="./heart.svg"></img>
        By Akshay Mishra
      </h3>
    </div>
    // footer and signature
  );
}

export default App;
