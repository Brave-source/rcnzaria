import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Login";
  }, []);
  const handleChange = (e) => {
    setInputs((prev) => {
        return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch(loginStart());
    try {
        const res = await axios.post('/users/login', inputs);
        dispatch(loginSuccess(res.data));
        navigate('/admin/Sermons');
    }catch(err) {
        dispatch(loginFailure());
        navigate('/home/error');
    }
  }

  return (
    <section>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Admin Login
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name = 'password'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="http://localhost:3000/home"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Login;
