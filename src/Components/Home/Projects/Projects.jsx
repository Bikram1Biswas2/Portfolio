import { useState } from 'react';
import equiSports from '../../../assets/equiSports.png';
import dineWise from '../../../assets/DineWise.png';
import carrerCompass from '../../../assets/CarrerCompass.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Carrer Compass',
            image: carrerCompass,
            techStack: 'React.js, Firebase, Tailwind CSS, DaisyUI, Vite, ESLint, React Router, AOS, React Hot Toast, React Helmet Async',
            description: 'A brief description of the project goes here...',
            liveLink: 'https://carrer-couseling.netlify.app/',
            githubLink: 'https://github.com/Bikram1Biswas2/Carrer_counseling',
            challenges: 'Challenges faced during development...1- Firebase Authentication setup 2- Managing complex state logic',
            improvements: 'Improvements planned for the future... 1- Implement backend, 2- JWT Token for better security, 3- Improve UI responsiveness',
        },
        {
            title: 'EquiSports',
            image: equiSports,
            techStack: 'React, React Router, Firebase Authentication, Tailwind CSS, DaisyUI, React Tooltip, React Awesome Reveal, SweetAlert2, Node.js, Express.js, MongoDB, CORS, Vite, ESLint, Dotenv',
            description: 'A brief description of the project goes here...',
            liveLink: 'https://kaleidoscopic-blancmange-899f65.netlify.app/',
            githubClientLink: 'https://github.com/Bikram1Biswas2/EquiSports-client',
            githubServerLink: 'https://github.com/Bikram1Biswas2/EquiSports-server',
            challenges: 'Challenges faced during development...1- Responsive Design Implementation 2- Firebase Authentication Setup 3- Dark/Light Theme Toggle 4- Real-Time Data Management 5- Animation Library Integration',
            improvements: 'Improvements planned for the future...  1- Data Fetching Optimization 3- Equipment Review System 4- Advanced Filtering and Sorting 5- Accessibility Enhancements 6- Payment Gateway Integration 7- User Dashboard Enhancements',
        },
        {
            title: 'Dine_Wise',
            image: dineWise,
            techStack: `React, React Router DOM, Firebase, Axios, Moment.js, React-Helmet-Async, SweetAlert2, DaisyUI, TailwindCSS, Swiper, React Icons, Lottie React, Yet Another React Lightbox, Typewriter Effect, Node.js, Express.js, MongoDB, CORS, Vite, ESLint, Dotenv`,
            description: 'A brief description of the project goes here...',
            liveLink: 'https://dine-wise.netlify.app/',
            githubClientLink: 'https://github.com/Bikram1Biswas2/DineWise_Client',
            githubServerLink: 'https://github.com/Bikram1Biswas2/DineWise_server',
            challenges: 'Challenges faced during development...1- Theme Customization 2- Gallery Lightbox 3- Real-Time Food Quantity Management',
            improvements: 'Improvements planned for the future: 1- Enhanced Search System, 2- AI-Based Recommendations, 3- Performance Optimization, 4- Admin Dashboard, 5- Multilingual Support, 6- Improved UX for Forms, 7- Push Notifications, 8- Analytics Dashboard, 9- Offline Support, 10- Third-Party Integrations',
        },
    ];
    

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>
                            <p className="text-gray-400 text-lg mb-4">{project.description}</p>
                            <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="btn btn-ghost text-white text-sm"
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-3xl font-bold text-teal-400 mb-4">{selectedProject.title}</h2>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="text-gray-400 text-lg mb-4">{selectedProject.description}</p>
                            <p className="text-sm text-gray-500">Tech Stack: {selectedProject.techStack}</p>
                            <p className="text-sm text-gray-500 mt-4">Challenges Faced: {selectedProject.challenges}</p>
                            <p className="text-sm text-gray-500 mt-2">Improvements Planned: {selectedProject.improvements}</p>

                            <div className="flex justify-between mt-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-teal-500 text-white"
                                >
                                    Live Link
                                </a>
                                {/* Conditionally Render GitHub Links */}
                                {selectedProject.githubServerLink ? (
                                    <>
                                        <a
                                            href={selectedProject.githubClientLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-teal"
                                        >
                                            GitHub Client Link
                                        </a>
                                        <a
                                            href={selectedProject.githubServerLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-teal"
                                        >
                                            GitHub Server Link
                                        </a>
                                    </>
                                ) : (
                                    <a
                                        href={selectedProject.githubClientLink || selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-teal"
                                    >
                                        GitHub Link
                                    </a>
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="btn btn-secondary text-white"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
