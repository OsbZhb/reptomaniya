import React from "react";
import { Outlet } from 'react-router-dom';

import Testimonials from "../Testimonials/Testimonials.jsx";
import Contact from "../Section-contact/Contact.jsx";
import Recommendation from "../Section-recommendations/Recommendations.jsx";
import ReptileFriends from "../Section-reptileFriends/ReptileFriends.jsx";
import SmallFriends from "../Section-smallFriends/SmallFriends.jsx";
import SectionAbout from "../SectionAbout/Section-about.jsx";
import Shop from "../Shop/Shop.jsx";
import SectionVideo from "../SectionVideo/SectionVideo.jsx";

const GeneralComponents = () => {
    return (
        <>
        <SectionAbout />
        <SmallFriends />
        <Shop />
        <ReptileFriends />
        {/* <Contact /> */} 
        {/* <Recommendation /> */}
        <SectionVideo />
        <Testimonials />
        </>
     );
}
 
export default GeneralComponents;