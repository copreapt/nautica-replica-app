import React from 'react'
import { BsInstagram, BsFacebook, BsVimeo } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className=" bg-[#fa503c]">
      <div className="space-y-8 flex flex-col  justify-center items-center">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-[80%] lg:mt-60">
          <div className="hidden lg:block space-y-4 text-center text-white">
            <h1>SCHEDULE</h1>
            <h1>MONDAY - FRIDAY</h1>
            <h1>
              9:00 - 13:00 H <br /> 16:00 - 20:00 H
            </h1>
            <h1>SATURDAYS</h1>
            <h1>9:00 - 13:00 H</h1>
          </div>
          <div className="pt-20 lg:p-0 text-white space-y-4 text-center">
            <h1>CONTACT US:</h1>
            <h1>INFO@NAUTICAERESO.COM</h1>
            <h1>
              971 199 605 <br /> (BOATS AND MOTOR SHOP)
            </h1>
            <h1>
              971 199 605 <br />
              (ACCESSORIES STORE)
            </h1>
          </div>
          <div className="text-white text-center space-y-4">
            <h1>ADDRESS:</h1>
            <h1>
              SANTA EULARIA AV. <br />
              DES RIU,23-27 <br />
              07800
            </h1>
            <h1>IBIZI (BALEARIC ISLANDS)</h1>
            {/* ICONS FOR DESKTOP */}
            <div className="text-white text-center pt-2 lg:ml-8 text-2xl space-x-9 hidden lg:flex">
              <BsInstagram />
              <BsFacebook />
              <BsVimeo />
            </div>
          </div>
          {/* ICONS FOR MOBILE */}
          <div className="flex text-white text-center ml-8 pt-2 text-2xl space-x-9 lg:hidden">
            <BsInstagram />
            <BsFacebook />
            <BsVimeo />
          </div>
        </div>
        <img
          src="https://nauticaereso.com/wp-content/uploads/2023/01/ico-logo-footer.svg"
          alt="image"
          className="w-[90%] pt-6 lg:pt-20"
        />
      </div>
      <div className="mt-5 pb-4 space-y-3">
        <h1 className="text-white pl-4 text-lg lg:hidden">
          Terms and Conditions
        </h1>
        <p className="text-small pl-4 lg:pl-20 text-sm text-white">
          2023. Nautica Ereso. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer