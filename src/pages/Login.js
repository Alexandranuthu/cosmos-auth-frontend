import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        
            
            <div className="font-favorit flex justify-between h-screen items-center mx-auto px-6 py-8 bg-[#1a1a1a] text-white relative ">
                
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 transform-none opacity-40 grainy-effect"
            >
                <source src={`${process.env.PUBLIC_URL}/assets/video/tree.mp4`} type="video/mp4" />
            </video>

            <div className="absolute top-4 left-4 z-20 p-4 flex justify-start items-start">
                <Link to="/" className="text-lg">
                    COSMOS
                    <span className="text-sm absolute left-30">&copy;</span>
                </Link>
            </div>

            {/* section one */}
            <div className="hidden md:flex flex-1 items-center justify-between flex-col z-10">
                <div className="flex-1 flex items-center justify-between flex-col z-10">

                    <div className="w-auto">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-80 h-80"
                        >
                            <source src={`${process.env.PUBLIC_URL}/assets/video/cosmos-rock-spin.webm`} type="video/mp4" />

                        </video>
                    </div>

                    <div className=" flex flex-row space-x-4 mb-8 text-gray-400 absolute bottom-2 text-center">
                        <div>
                            <span className="text-sm"><a href="https://link.cosmos.so/terms-of-service">Terms of Service</a></span>
                        </div>
                        <div>
                            <span className="text-sm"><a href="https://link.cosmos.so/privacy-policy">Privacy Policy</a></span>
                        </div>
                    </div>


                </div>
            </div>

                {/* vertical line */}
                <div className="hidden md:block w-[0.1rem] h-screen bg-gray-600 opacity-90"></div>

                {/* section two */}
                <div className="flex-1 flex flex-col w-full md:w-1/2 items-center justify-center space-y-8 z-10">
                    <div className="flex items-center justify-center w-full p-3">
                        <video

                            muted
                            playsInline
                            className="w-16 h-16"
                        >
                        <source src={`${process.env.PUBLIC_URL}/assets/video/cosmos-rock-spin.webm`} type="video/mp4" />

                        </video>
                    </div>
                    <div className="">
                        <h2 className="text-center text-xl font-custom leading-tight tracking-tight md:text-2xl">Login</h2>
                        <Link to="/" className="flex flex-row space-x-1">
                        <span>or</span> <p className="underline text-gray-400"> create an account</p>
                        </Link>
                        
                    </div>

                    <form className="space-y-6  w-7/12">

                        <div className="mt-4 relative">
                            <input
                                type="email"
                                required
                                placeholder=" "
                                className="floating-input rounded-full p-4 w-full border-2 border-gray-600 bg-[#1a1a1a] bg-opacity-30 focus:ring-0 focus:border-transparent focus:outline-none block"
                            />
                            <label className="floating-label text-gray-500">Email</label>
                        </div>

                        <div className="mt-4 relative">


                            <input type={showPassword ? "text" : "password"} required placeholder=" " className="floating-input p-4 rounded-full bg-[#1a1a1a] bg-opacity-30 border-2 border-gray-600 w-full focus:ring-0 focus:border-transparent focus:outline-none block" />
                            <label className="floating-label text-gray-500">Password</label>
                            <span className={`absolute right-2 top-4 h-full w-8 text-center ${showPassword ? 'text-gray-400' : 'text-gray-500'} cursor-pointer transition-all duration-300 ease-in-out`} onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-6 h-6" />
                            </span>
                        </div>




                    <button type="submit" className="w-full bg-white text-black  p-4 rounded-full hover:bg-gray-300">Enter</button>

                    <div>
                        <Link to="/resetPassword" className="mt-4">
                            <p className="text-gray-400 text-center hover:underline">Forgot Password?</p>
                        </Link>
                    </div>
                    
                        {/* <p className="text-center"><a href="https://www.cosmos.so/forgot-password" className="hover:underline text-gray-400">Forgot Password?</a></p> */}
                    </form>

                </div>
            </div>
        
    
        
        
    )
}

export default Login;