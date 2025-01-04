import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Designation from "./Designation/Designation";
import Education from "./Education/Education";
import MySkills from "./MySkills/MySkills";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Designation></Designation>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;