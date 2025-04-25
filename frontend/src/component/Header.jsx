
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Menu, X } from "lucide-react"; // Import icons
import { FOOTERITEMS, FORMROUTES } from "../constant";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoMenuOpen, setPhotoMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  );

  const navigate = useNavigate();

  // Fetch user data after login
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        if (res.data.profilePic) {
          setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
        }
      })
      .catch(() => setUser(null));
  }, []);

  // Logout function
  const handleLogout = () => {
    axios
      .post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  // Handle profile image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPhotoMenuOpen(false); // Close the photo menu
    }
  };

  // Upload profile image
  const handleUpload = () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("profilePic", image);

    axios
      .post("http://localhost:5000/api/auth/uploads", formData, { withCredentials: true })
      .then((res) => {
        setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center justify-between px-4 py-4 text-4xl font-bold bg-white shadow-md">
      {/* Logo */}
      <p>
        Resum<span className="text-violet-800">o</span>
      </p>

      {/* Toggle Button (Visible on md and below) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10 text-2xl">
        <ul className="flex space-x-10">
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FORMROUTES.HOME)}
          >
            Home
          </li>
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FOOTERITEMS.TEMPLATES)}
          >
            Template
          </li>
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FOOTERITEMS.ABOUTUSFOOTER)}
          >
            About
          </li>
        </ul>
      </div>

      {/* Right Section - User Info (Desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        {user && <span className="text-2xl font-bold text-gray-700">{user.name}</span>}
        <div className="relative">
          <img
            src={preview}
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
          />
          {photoMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
              {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
              <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
                Choose a photo
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
              <button
                onClick={handleUpload}
                className="w-full mt-2 px-4 py-2 bg-violet-700 text-white rounded-md"
              >
                Upload
              </button>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
          {/* Profile Picture First */}
          <div className="relative flex flex-col items-center">
            <img
              src={preview}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
            />
            {photoMenuOpen && (
              <div className="mt-2 w-40 bg-white shadow-lg rounded-lg p-2 text-center">
                {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
                <label className="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 text-xl">
                  Choose a photo
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
                <button
                  onClick={handleUpload}
                  className=" mt-2 px-2 py-1 bg-violet-700 text-white rounded-md"
                >
                  Upload
                </button>
              </div>
            )}
          </div>
          {/* Menu Items */}
          <ul className="flex flex-col items-center text-xl space-y-4">
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FORMROUTES.HOME)}
            >
              Home
            </li>
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FOOTERITEMS.TEMPLATES)}
            >
              Template
            </li>
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FOOTERITEMS.ABOUTUSFOOTER)}
            >
              About
            </li>
          </ul>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
