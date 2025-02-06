import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import myImg from '../../../assets/Bikram.jpg';
import TypewriterComponent from 'typewriter-effect';


const Designation = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto w-11/12">
                <img
                    src={myImg}
                    alt="Profile"
                    className="w-80 h-80 rounded-full shadow-2xl border-4 border-teal-400 hover:scale-105 transition-transform"
                />
                <div className="text-center lg:text-left lg:ml-8">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-teal-400">
                        <TypewriterComponent
                            options={{
                                strings: ['Hello, I am Bikram Biswas', 'Welcome to My Portfolio!'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </h1>
                    <h1 className="text-xl lg:text-3xl font-bold text-teal-300">
                        MernStack Developer
                    </h1>
                    <p className="py-6 text-lg text-gray-300">
                        I specialize in crafting modern, responsive, and user-friendly web
                        applications. Dedicated to clean and efficient code.
                    </p>
                    <div className="flex items-center gap-6 justify-center lg:justify-start text-3xl">
                        <a
                            href="https://github.com/Bikram1Biswas2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-teal-400 transition duration-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-teal-400 transition duration-300 text-blue-700"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/bikrm.biawas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-teal-400 transition duration-300"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                    <div className="mt-6">
                        <a
                            href="/My Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:from-orange-500 hover:to-orange-700 shadow-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designation;
