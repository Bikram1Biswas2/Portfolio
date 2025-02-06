import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const MySkills = () => {
  return (
    <div id="mySkill" className="w-full min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-teal-300 mb-4">Frontend Development</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg flex items-center gap-1 text-orange-500"><FaHtml5 /> HTML</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-blue-500"><IoLogoCss3 /> CSS</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-teal-500"><RiTailwindCssFill /> Tailwind CSS</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg text-purple-500">DaisyUI</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-yellow-400"><SiJavascript /> JavaScript</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-blue-400"><FaReact /> React</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-teal-300 mb-4">Backend Development</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg flex items-center gap-1 text-green-600"><FaNode /> Node.js</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-green-500"><SiMongodb /> MongoDB</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">60%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "60%" }}></div>
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
              <p className="text-lg flex items-center gap-1 text-white"><TbBrandGithubFilled /> Git & GitHub</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg flex items-center gap-1 text-pink-500"><FiFigma /> Figma</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold">60%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "60%" }}></div>
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
