import HeroSection from "../components/HeroSection";
import Activity from "../components/Activity";
import FacultyLife from "../components/FacultyLife";
import Partners from "../components/Partners";
import Achievements from "../components/Achievements";
import Announcements from "../components/Announcements";
import WelcomeModal from "../components/ModalAction";

const Home = () => {
  return (
    <>
      <WelcomeModal />
      <HeroSection />
      <Announcements />
      <Activity />
      <FacultyLife />
      <Partners />
      <Achievements />
    </>
  );
};

export default Home;
