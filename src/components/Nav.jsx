import Button from "./Button";

import React from "react";

const Navbar = () => {
  const [mobile, setMobile] = React.useState(true);

  return (
    <nav className=" flex justify-between items-center p-4  bg-white absolute top-0 right-0 left-0 xl:px-20 ">
      <img src="/src/images/logo.svg" alt="logo" />
      <img
        className="cursor-pointer hover:bg-slate-100 lg:hidden "
        onClick={() => setMobile(!mobile)}
        src={
          mobile ? "/src/images/icon-close.svg" : "/src/images/icons8-menu.svg"
        }
        alt="menu"
      />
      <nav
        className={` bg-white flex flex-col gap-6 text-2xl text-black justify-center absolute top-20 right-10 left-10 p-10 rounded-lg text-center transition-all duration-700 ease-in lg:hidden ${
          mobile ? "block" : "hidden"
        }`}
      >
        <a className="hover:text-lime-green" href="">
          Home
        </a>
        <a className="hover:text-lime-green" href="">
          About
        </a>
        <a className="hover:text-lime-green" href="">
          Contact
        </a>
        <a className="hover:text-lime-green" href="">
          Blog
        </a>
        <a className="hover:text-lime-green" href="">
          Career
        </a>
      </nav>
      <div className="hidden lg:block ">
        <a
          className="mr-6 pb-6 hover:border-b-4 hover:border-lime-green"
          href=""
        >
          Home
        </a>
        <a
          className="mr-6 pb-6 hover:border-b-4 hover:border-lime-green"
          href=""
        >
          About
        </a>
        <a
          className="mr-6 pb-6 hover:border-b-4 hover:border-lime-green"
          href=""
        >
          Contact
        </a>
        <a
          className="mr-6 pb-6 hover:border-b-4 hover:border-lime-green"
          href=""
        >
          Blog
        </a>
        <a
          className="mr-6 pb-6 hover:border-b-4 hover:border-lime-green"
          href=""
        >
          Career
        </a>
      </div>
      <div className="hidden lg:block">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
