import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (

        <div className=" font-favorit flex flex-col justify-between min-h-screen items-center mx-auto px-6 py-8  bg-[#1a1a1a] text-white relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 transform-none opacity-40 grainy-effect"
            >
                <source src='/assets/video/tree.mp4' type="video/mp4" />

            </video>

            <div className="flex w-full justify-start items-start relative">
                <Link to="/login">
                    <a href="/login" className="text-lg">COSMOS  <span className="text-sm absolute left-20">&copy;</span></a>
                </Link>
            </div>
            <div className="relative z-10 w-full max-w-xs rounded-xl  md:max-w-md  shadow-lg border border-gray-700 md:mt-0 sm:max-w-md xl:p-0 bg-[#1a1a1a] bg-opacity-40">
                <div className="flex items-center justify-center w-full p-3">
                    <video

                        muted
                        playsInline
                        className="w-16 h-16"
                    >
                        <source src='/assets/video/cosmos-rock-spin.webm' type="video/mp4" />

                    </video>
                </div>




                <div className="p-3 md:p-4">
                    <h2 className="text-center text-xl font-custom leading-tight tracking-tight md:text-2xl">Welcome to Cosmos</h2>
                    <p className="text-center font-semibold text-gray-400">Begin by creating an account</p>
                </div>

                <div className="space-x-4 md:space-y-6 sm:p-8 h-full">
                    <form className="space-y-4 flex-1">
                        <div className="mb-32">
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

                            <div className="text-center mt-4">
                                <p className="font-normal text-sm">
                                    By continuing, you agree to our <br />
                                    <a href="https://link.cosmos.so/terms-of-service" className="text-gray-400">Terms</a> and <a href="https://link.cosmos.so/privacy-policy" className="text-gray-400">Privacy Policy</a>
                                </p>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-white text-black  p-4 rounded-full">Continue</button>
                    </form>
                </div>





            </div>

        </div>
    )
}

export default Signup;