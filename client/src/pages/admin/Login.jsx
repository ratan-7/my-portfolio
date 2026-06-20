import React, { useState } from "react";
import { loginUser } from "../../services/api"
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            setLoading(true);


            const res = await loginUser({
                email,
                password
            });

            console.log(res);
            if (res.accessToken) {

                localStorage.setItem(
                    "token",
                    res.accessToken
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(res.user)
                );

                navigate("/dashboard");

            } else {

                alert(res.message);

            }

        } catch (error) {

            console.error(error);

            alert(
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    return (<div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
                Welcome Back 👋
            </h2>

            <form
                className="flex flex-col gap-4"
                onSubmit={handleLogin}
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-70"
                >
                    {loading ? "Signing In..." : "Login"}
                </button>
            </form>

            <div className="text-center text-gray-500 mt-5">
                Portfolio Admin Panel
            </div>
        </div>
    </div>
    );
};

export default Login;