const MySkills = () => {
    return (
        <div id='mySkill' className="w-full min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Skills</h2>

                {/* Frontend Skills */}
                <div className="mb-8 ">
                    <h3 className="text-3xl font-semibold text-teal-300 mb-4">Frontend Development</h3>
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-lg">HTML</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">CSS</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">80%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg">Tailwind CSS</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg">DaisiUI</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">95%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">JavaScript</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">80%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">React</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">85%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-8">
                    <h3 className="text-3xl font-semibold text-teal-300 mb-4">Backend Development</h3>
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="">
                            <p className="text-lg">Node.js</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">70%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">MongoDB</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">60%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-3xl font-semibold text-teal-300 mb-4">Tools & Technologies</h3>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-lg">Git & GitHub</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">85%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Figma</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">80%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg">Pixso</p>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <span className="text-sm font-semibold">85%</span>
                                </div>
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="w-full bg-gray-300 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
