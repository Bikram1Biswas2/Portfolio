import { useState } from "react";
import equiSports from "../../../assets/equiSports.png";
import dineWise from "../../../assets/DineWise.png";
import pharmaNest from "../../../assets/pharmaNest.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Pharma_Nest",
      image: pharmaNest,
      techStack: "React.js, Firebase, Tailwind CSS, DaisyUI, Vite, ESLint, React Router, AOS, React Hot Toast, React Helmet Async",
      description:
        "Pharma Nest is a multi-vendor e-commerce platform designed for selling medicines. It features secure payment integration using Stripe, role-based dashboards for Admin, Seller, and User, and advanced functionalities such as product pagination, sorting, and search. The platform offers a seamless user experience with persistent login state, responsive design, and CRUD operations for medicines. Additionally, it includes features like sales report downloads, advertisement management, and dynamic product showcases for enhanced engagement and scalability.",
      liveLink: "https://pharmanest-b6b2d.web.app",
      githubClientLink: "https://github.com/Bikram1Biswas2/pharmaNest_Client",
      githubServerLink: null,
      challenges:
        "1. Setting up Firebase Authentication with secure environment variables. 2. Managing complex state logic for cart, checkout, and dashboard operations. 3. Implementing advanced table functionalities such as filtering, sorting, and pagination.",
      improvements:
        "1. Implement a robust backend service for enhanced functionality and data management. 2. Improve UI/UX for better user engagement. 3. Add localization features for multi-language support.",
    },
    {
        title: "Dine_Wise",
        image: dineWise,
        techStack: "React, Firebase, Axios, Moment.js, DaisyUI, TailwindCSS, Swiper, React Icons, Node.js, Express.js, MongoDB",
        description: "Dine Wise is a feature-rich restaurant management platform designed to enhance operational efficiency and customer engagement. The platform allows users to explore top-selling foods, manage orders, and update food inventories in real-time. Key features include secure authentication with JWT, theme customization, dynamic pagination, a responsive gallery with lightbox functionality, and seamless CRUD operations for food management. The project offers an intuitive user experience with efficient date formatting, interactive sliders, and a purchase management system to prevent order conflicts.",
        liveLink: "https://dine-wise.netlify.app/",
        githubClientLink: "https://github.com/Bikram1Biswas2/DineWise_Client",
        githubServerLink: "https://github.com/Bikram1Biswas2/DineWise_server",
        challenges: "1. Real-time food inventory updates during purchase. 2. Efficient management of customer food interactions with advanced filtering and pagination. 3. Secure and seamless environment setup using Firebase and MongoDB environment variables.",
        improvements: "1. Enhance the user interface for improved navigation and engagement. 2. Implement a comprehensive admin dashboard for detailed analytics. 3. Introduce a multilingual interface for diverse user support."
      },
    {
      title: "EquiSports",
      image: equiSports,
      techStack: "React, React Router, Firebase Authentication, Tailwind CSS, DaisyUI, React Tooltip, React Awesome Reveal, SweetAlert2, Node.js, Express.js, MongoDB, CORS, Vite, ESLint, Dotenv",
      description: "EquiSports is an innovative platform offering sports equipment rentals and bookings with features such as user reviews, animations, and theme toggles.",
      liveLink: "https://kaleidoscopic-blancmange-899f65.netlify.app/",
      githubClientLink: "https://github.com/Bikram1Biswas2/EquiSports-client",
      githubServerLink: "https://github.com/Bikram1Biswas2/EquiSports-server",
      challenges: "1- Responsive Design Implementation 2- Firebase Authentication Setup 3- Dark/Light Theme Toggle",
      improvements: "1- Data Fetching Optimization 2- Payment Gateway Integration 3- User Dashboard Enhancements",
    },
    
  ];

  return (
    <div id="myProjects" className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>

              {/* Truncated Description */}
              <p className="text-gray-400 text-lg mb-4">
                {project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description}
              </p>

              <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
              <div className="flex justify-between mt-4">
                <button onClick={() => setSelectedProject(project)} className="btn btn-ghost text-white text-sm">
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
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-400 text-lg mb-4">{selectedProject.description}</p>
              <p className="text-sm text-gray-500">Tech Stack: {selectedProject.techStack}</p>
              <p className="text-sm text-gray-500 mt-4">Challenges Faced: {selectedProject.challenges}</p>
              <p className="text-sm text-gray-500 mt-2">Improvements Planned: {selectedProject.improvements}</p>

              <div className="flex justify-between mt-4">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-teal-500 text-white">
                  Live Link
                </a>
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
                <button onClick={() => setSelectedProject(null)} className="btn btn-secondary text-white">
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
