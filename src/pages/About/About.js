import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import './about.css';

import Sandra from '../../assets/Sandra.svg';
import Birk from '../../assets/Birk.svg';
import Ida from '../../assets/Ida.svg';
import Mia from '../../assets/Mia.svg';
import Moa from '../../assets/Moa.svg';
import Robin from '../../assets/Robin.svg';


const AboutPage = () => {
  return (
    <>
      <Header></Header>
      <section className="about-page">
        <Card
          image={Sandra}
          alt="Sandra Danielsson"
          title="Webbutvecklare"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
         ></Card>

         <Card
          image={Mia}
          alt="Mia Lorén"
          title="UX Designer"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
         ></Card>

         <Card
          image={Birk}
          alt="Birk Härkönen"
          title="Manusförfattare"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
         ></Card>

         <Card
          image={Moa}
          alt="Moa Hansen"
          title="Game Artist"
          text="Lorem ipsum dolor sit amet consectetur"
         ></Card>

         <Card
          image={Ida}
          alt="Ida From"
          title="Webbutvecklare"
          text="Lorem ipsum dolor sit amet consectetur"
         ></Card>

         <Card
          image={Robin}
          alt="Robin Bono"
          title="Game Programmer"
          text="Lorem ipsum dolor sit amet consectetur"
         ></Card>         
      </section>
    </>
  );
};

export default AboutPage;