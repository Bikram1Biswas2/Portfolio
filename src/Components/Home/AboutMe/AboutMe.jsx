const AboutMe = () => {
    return (
        <div id="aboutMe" className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-teal-900 to-gray-800 text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-teal-400 mb-6">About Me</h2>
                <div className="lg:flex lg:justify-between gap-3">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h3 className="text-3xl font-semibold mb-4">My Programming Journey</h3>
                        <p className="text-lg">
                            Ever since I was introduced to programming, I’ve been captivated by the endless possibilities it offers. What started as a curiosity turned into a passion as I explored different programming languages and frameworks. I enjoy solving problems and turning complex challenges into efficient, elegant solutions.
                        </p>
                        <p className="text-lg mt-4">
                            Over the years, I’ve honed my skills in **Frontend Development**, and I love creating beautiful, responsive websites that provide excellent user experiences. I’m always excited to learn new technologies and improve my craft.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-semibold mb-4">Outside of Coding</h3>
                        <p className="text-lg">
                            When I’m not writing code, you can find me **playing cricket** or **watching cricket** matches. It’s a great way for me to stay active and enjoy the game I love. I also enjoy **listening to music** during my downtime, which helps me relax and recharge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
