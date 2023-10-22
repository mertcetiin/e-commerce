import { Link } from "react-router-dom";
import Footer from "./Footer";

function Login() {
    return (
        <div>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="text-sm w-full p-2 border rounded-md" placeholder="Enter email address" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600 text-sm mb-2">Password</label>
                            <input type="password" id="password" name="password" className="text-sm w-full p-2 border rounded-md" placeholder="Enter password" />
                        </div>
                        <p className="text-sm mb-2">Don't have an account? <Link to='/signup' className="text-blue-500 hover:underline">Sign Up</Link> here</p>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" >
                            <Link to='/shop'>Login</Link>
                        </button>
                    </form>
                    <div className="mt-4 text-sm text-center">
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Login;
