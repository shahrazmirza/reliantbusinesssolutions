import React from 'react';
import Navbar from './components/Navbar';
import Scroll_to_top from './components/Scroll_to_top';
import Whatsapp from './components/Whatsapp';
import Hero from './components/Hero';
import Services_section_one from './components/Services_section_one';
import Services_section_two from './components/Services_section_two';
import Associations from './components/Associations';
import Faq from './components/Faq';
import Footer from './components/Footer';


const page = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <Hero />
      <Services_section_one />
      <Services_section_two />
      <Associations />
      <Faq />
      <Footer />
    </div>
  );
}

export default page
