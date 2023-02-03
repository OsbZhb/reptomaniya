import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Section-contact/Contact";
import Recommendation from "./components/Section-recommendations/Recommendations";
import ReptileFriends from "./components/Section-reptileFriends/ReptileFriends";
import SmallFriends from "./components/Section-smallFriends/SmallFriends";
import SectionAbout from "./components/SectionAbout/Section-about";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import SectionVideo from "./components/SectionVideo/SectionVideo";


function App() {
  return (
    <div className="App container">
      <Header />
      <SectionAbout />
      <SmallFriends />
      <Shop />
      <ReptileFriends />
      {/* <Contact /> */}
      <Recommendation />
      <SectionVideo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
