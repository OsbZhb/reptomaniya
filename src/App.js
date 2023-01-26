import Header from "./components/Header/Header";
import Contact from "./components/Section-contact/Contact";
import ReptileFriends from "./components/Section-reptileFriends/ReptileFriends";
import SmallFriends from "./components/Section-smallFriends/SmallFriends";
import SectionAbout from "./components/SectionAbout/Section-about";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SmallFriends />
      <Shop />
      <ReptileFriends />
      <Contact />
    </div>
  );
}

export default App;
