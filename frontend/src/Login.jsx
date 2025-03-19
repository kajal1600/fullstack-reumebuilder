

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ROUTES } from "./constant/index";

// export default function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!username || !password) {
//             setError("Username and password are required");
//         } else {
//             setError("");
//             console.log("Logging in with", { username, password });
//             // Handle login logic here
//         }
//     };

//     return (
//         <div className="bg-gray-300 flex items-center justify-center min-h-screen">
//             <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
//                             Username
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
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
//                     {error && <div className="text-violet-500 text-sm mb-4">{error}</div>}
//                     <button
//                         type="submit"
//                         className="w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-800">
//                         Login
//                     </button>
//                 </form>
//                 <p className="text-center mt-4">
//                     Don't have an account?

//                     <Link to={ROUTES.SIGNUP}>
//                     <button
                    
//                         className="text-violet-500 hover:underline font-bold ml-1"
//                     >
//                         Sign up
//                     </button>
//                     </Link>
                 
//                 </p>
//             </div>
//         </div>
//     );
// }















// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch("http://localhost:5000/api/auth/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 credentials: "include", // Session Cookies ke liye zaroori hai
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await res.json();
//             console.log("Login Response:", data); // Debugging ke liye

//             if (res.ok) {
                
//             setSuccessMessage("Login successfully!");
//                 navigate("/home"); // Login successful to Home par redirect
//             } else {
//                 setError(data.error || "Login failed. Please try again.");
//             }
//         } catch (err) {
//             console.error("Login Error:", err);
//             setError("Something went wrong. Try again later.");
//         }
//     };

//     return (
//         <div className="bg-gray-400 flex items-center justify-center min-h-screen">
//             <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>

//                 {successMessage && (
//                     <div className="bg-green-100 text-green-800 border border-green-400 p-2 mb-4 rounded-md">
//                         {successMessage}
//                     </div>
//                 )}

//                 <form onSubmit={handleLogin}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg text-gray-800"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full px-4 py-2 border rounded-lg text-gray-800"
//                         />
//                     </div>
//                     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                   
//                     <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-800">
//                         Login
//                     </button>
               
//                 </form>
//                 <p className="text-center text-gray-600 mt-4">
//                     Don't have an account?{" "}
//                     <Link to="/signup" className="text-violet-500 hover:underline font-bold">Sign up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log("Login Response:", data);

            if (res.ok) {
                setSuccessMessage("Login successful!");
                navigate("/home");
            } else {
                setError(data.error || "Login failed. Please try again.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError("Something went wrong. Try again later.");
        }
    };

    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/api/auth/google/callback", "_self");
    };

    return (
        <div className="bg-gray-400 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                {successMessage && (
                    <div className="bg-green-100 text-green-800 border border-green-400 p-2 mb-4 rounded-md">
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-800"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-800">Login</button>
                </form>
                <div className="text-center my-4 text-gray-600">OR</div>
                <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2">
                    <img src="/google-icon.png" alt="Google" className="w-5 h-5" /> Continue with Google
                </button>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <Link to="/signup" className="text-violet-500 hover:underline font-bold">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
