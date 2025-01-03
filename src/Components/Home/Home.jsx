import AboutMe from "./AboutMe/AboutMe";
import Designation from "./Designation/Designation";
import Education from "./Education/Education";
import MySkills from "./MySkills/MySkills";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Designation></Designation>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Education></Education>
        </div>
    );
};

export default Home;