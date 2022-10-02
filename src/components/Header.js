import React from "react";
import icon from "../assets/icon.png"

function Header() {
  return (
    <div className="max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto  mt-11">
      <div>
        <h1 className="pl-12">Events</h1>
        <div>
          <img src={icon} alt='alt' />
          <p>Bernice</p>
        </div>
      </div>
      
    </div>
  );
}

export default Header;