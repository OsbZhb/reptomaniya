import Videos from "./components/Block_video/Video";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Section-contact/Contact";
import Recommendation from "./components/Section-recommendations/Recommendations";
import ReptileFriends from "./components/Section-reptileFriends/ReptileFriends";
import SmallFriends from "./components/Section-smallFriends/SmallFriends";
import SectionAbout from "./components/SectionAbout/Section-about";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <div className="App container">
      <Header />
      <SectionAbout />
      <SmallFriends />
      <Shop />
      <ReptileFriends />
      <Contact />
      <Recommendation />
      <Videos />
      <Reviews />
    </div>
  );
}

export default App;
