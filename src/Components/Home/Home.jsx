import AboutMe from "./AboutMe/AboutMe";
import Designation from "./Designation/Designation";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Designation></Designation>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;