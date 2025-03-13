import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const MySkills = () => {
  return (
    <div id="mySkill" className="w-full min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
      <div className="w-11/12 mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-teal-300 mb-4">Frontend Development</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FaHtml5 className="text-orange-500 text-3xl" />
                <p className="text-xl text-white">HTML</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <IoLogoCss3 className="text-blue-500 text-3xl" />
                <p className="text-xl text-white">CSS</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <RiTailwindCssFill className="text-teal-500 text-3xl" />
                <p className="text-xl text-white">Tailwind CSS</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <SiJavascript className="text-yellow-500 text-3xl" />
                <p className="text-xl text-white">JavaScript</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FaReact className="text-blue-400 text-3xl" />
                <p className="text-xl text-white">React</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <BiLogoTypescript className="text-blue-400 text-3xl" />
                <p className="text-xl text-white">TypeScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-teal-300 mb-4">Backend Development</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FaNode className="text-green-600 text-3xl" />
                <p className="text-xl text-white">Node.js</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <SiMongodb className="text-green-500 text-3xl" />
                <p className="text-xl text-white">MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-3xl font-semibold text-teal-300 mb-4">Tools & Technologies</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <TbBrandGithubFilled className="text-white text-3xl" />
                <p className="text-xl text-white">Git & GitHub</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FiFigma className="text-pink-500 text-3xl" />
                <p className="text-xl text-white">Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
