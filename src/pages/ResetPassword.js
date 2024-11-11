import React from "react";
import { Link } from "react-router-dom";


function ResetPassword() {
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
                <Link to="/login" className="text-lg">
                    COSMOS
                    <span className="text-sm absolute left-30">&copy;</span>
                </Link>
            </div>


            {/* section one */}
            <div className="hidden flex-1 md:flex items-center justify-between flex-col z-10">

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

            {/* vertical line */}
            <div className="hidden md:block w-[0.1rem] h-screen bg-gray-600 opacity-90"></div>

            {/* section two */}
            <div className="flex-1 flex flex-col w-full md:w-1/2 items-center justify-center space-y-8 z-10">
                
                <div className="text-center w-3/5">
                    <h2 className="text-center text-2xl font-custom leading-tight tracking-tight md:text-2xl">Reset Password</h2>
                    
                    <p className="text-gray-400 w-full text-center">
                        Enter your email or username and we’ll send you
                        a link where you can reset your password.
                    </p>
                    

                </div>

                <form className="space-y-6  w-7/12">

                    <div className="mt-4 relative">
                        <input
                            type="email"
                            required
                            placeholder=" "
                            className="floating-input rounded-full p-4 w-full border-2 border-gray-600 bg-[#1a1a1a] bg-opacity-30 focus:ring-0 focus:border-transparent focus:outline-none block"
                        />
                        <label className="floating-label text-gray-500">Email or username</label>
                    </div>

                   




                    <button type="submit" className="w-full bg-white text-black  p-4 rounded-full hover:bg-gray-300">Enter</button>
                    
                </form>

                <div className=" flex flex-row space-x-4 mb-8 absolute bottom-10 text-center">
                    <div>
                        <p className="text-white">Need help? <span className="text-gray-400 underline"><a href="feedback@cosmos.so">Contact support</a></span></p>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default ResetPassword;