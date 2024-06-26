import React from "react"
import Stripes from './stripes';
import Logo from './logo';
import Timezone from './date';
import Timezone2 from './date-2';

const PageHeader = props => (
  
  <footer className=" flex flex-col pt-20 lg:pt-40 relative">
    <div className=" flex justify-between mx-d">
      <p>© 2024 / STUDIO–RO</p>

      <div className="lg:flex font-base">
        <Timezone />
        <Timezone2 />
      </div>
      
      <div className="flex footer-links">
        <a href="https://www.instagram.com/rocii_jorda/">Instagram</a>
        <a className="ml-4" href="/contact">Contact</a>
      </div>
    </div>

    <Stripes/>
    <Logo/>

</footer>
);

export default PageHeader