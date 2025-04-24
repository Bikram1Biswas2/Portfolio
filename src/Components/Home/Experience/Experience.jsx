const Experience = () => {
    return (
      <div id="myExperience" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-10 px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-400">Experience</h2>
  
        {/* ✅ Software Developer Intern - DevifAI */}
        <div className="mb-6 bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-teal-400">Software Developer</h3>
          <p className="text-gray-400">DevifAI, Kolkata, India | January 2025 – Present</p>
          <ul className="list-disc ml-5 mt-2 text-gray-300">
            <li>Developing an <strong className="text-teal-300">Astrologer Admin Dashboard</strong> for business management using <strong className="text-teal-300">TypeScript</strong>.</li>
            <li>Building a scalable landing page frontend using <strong className="text-teal-300">React.js</strong> and <strong className="text-teal-300">Tailwind CSS</strong>.</li>
           
          </ul>
        </div>
      </div>
    );
  };
  
  export default Experience;
  