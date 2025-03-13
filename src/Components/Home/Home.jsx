import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Designation from "./Designation/Designation";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import MySkills from "./MySkills/MySkills";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";


const Home = () => {
    return (
        <div id="home" className="">
            <Navbar></Navbar>
            <Designation></Designation>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Experience></Experience>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;