const Education = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Education</h2>

                {/* Education Timeline */}
                <div className="space-y-10">
                    {/* Bachelor Of Technology */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-teal-300">Bachelor Of Technology</h3>
                        <p className="text-xl text-gray-400">Institution: <span className="font-bold">JIS College Of Engineering</span></p>
                        <p className="text-xl text-gray-400">Year of Graduation: <span className="font-bold">2023</span></p>
                        <p className="text-xl text-gray-400">Specialization: <span className="font-bold">Electrical Engineering</span></p>
                        <p className="text-xl text-gray-400">Percentage: <span className="font-bold">77.35%</span></p>
                    </div>

                    {/* Diploma in Electrical Engineering */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-teal-300">Diploma in Electrical Engineering</h3>
                        <p className="text-xl text-gray-400">Institution: <span className="font-bold">JIS College Of Engineering</span></p>
                        <p className="text-xl text-gray-400">Year of Graduation: <span className="font-bold">2020</span></p>
                        <p className="text-xl text-gray-400">Specialization: <span className="font-bold">Electrical Engineering</span></p>
                        <p className="text-xl text-gray-400">Percentage: <span className="font-bold">68.2%</span></p>
                    </div>

                    {/* Higher Secondary */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-teal-300">Higher Secondary</h3>
                        <p className="text-xl text-gray-400">Institution: <span className="font-bold">Tehatta High School</span></p>
                        <p className="text-xl text-gray-400">Year of Passout: <span className="font-bold">2017</span></p>
                        <p className="text-xl text-gray-400">Stream: <span className="font-bold">Bio Science</span></p>
                        <p className="text-xl text-gray-400">Percentage: <span className="font-bold">65.8%</span></p>
                    </div>

                    {/* Matriculation */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-semibold text-teal-300">Matriculation</h3>
                        <p className="text-xl text-gray-400">Institution: <span className="font-bold">Tehatta High School</span></p>
                        <p className="text-xl text-gray-400">Year of Passout: <span className="font-bold">2015</span></p>
                        <p className="text-xl text-gray-400">Percentage: <span className="font-bold">72.57%</span></p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-400">For more details, you can reach out to me at:</p>
                    <p className="text-xl text-teal-400 mt-2">bikrambiswas912@gmail.com</p>
                    <p className="text-xl text-teal-400 mt-2">Phone: 8370988289</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
