

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "./constant/index"; 
// import { Link } from "react-router-dom";

// export default function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
  

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name || !email || !password) {
//             setError("All fields are required");
//         } else {
//             setError("");
//             console.log("Signing up with", { name, email, password });
//             // Handle sign-up logic here
//         }
//     };

//     return (
//         <div className="bg-gray-300 flex items-center justify-center min-h-screen">
//             <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg text-gray-800"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg text-gray-800"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg text-gray-800"
//                         />
//                     </div>
//                     {error && <div className="text-violet-700 text-sm mb-4">{error}</div>}
//                     <button
//                         type="submit"
//                         className="w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-700">
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="text-center  mt-4">
//                     Already have an account?

//                     <Link to={ROUTES.LOGIN}>
//                     <button
                      
//                         className="text-violet-700 hover:underline font-bold ml-1"
//                     >
//                         Login
//                     </button>
//                     </Link>
                   
//                 </p>
//             </div>
//         </div>
//     );
// }














import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./constant/index"; 
import { Link } from "react-router-dom";
import axios from "axios";  // ✅ Fixed import

export default function Signup() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(""); // ✅ Keep track of errors
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Validation: Ensure all fields are filled
        if (!value.name || !value.email || !value.password) {
            setError("All fields are required.");
            return;
        }
        setError(""); // Clear previous error if any

        try {
            // ✅ Send data to backend
            const response = await axios.post("http://localhost:5000/api/auth/register", value);

            console.log(value);

            // ✅ Reset form fields on success
            setValue({
                name: "",
                email: "",
                password: "",
            });

            setSuccessMessage("Account created successfully!");
        } catch (error) {
            console.error("Registration error:", error);
            setError("Failed to register. Please try again.");
        }
    };

    return (
        <div className="bg-gray-400 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>

                {successMessage && (
                    <div className="bg-green-100 text-green-800 border border-green-400 p-2 mb-4 rounded-md">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={value.name}
                            onChange={handleChange}
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={value.email}
                            onChange={handleChange}
                            name="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={value.password}
                            onChange={handleChange}
                            name="password"
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    <button
                        type="submit"
                        className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-800">
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?
                    <Link to={ROUTES.LOGIN}>
                        <button className="text-violet-500 hover:underline font-bold ml-1">
                            Login
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
}


