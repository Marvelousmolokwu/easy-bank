import Navbar from "./Nav";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-very-light-gray text-lg pb-20 overflow-hidden lg:flex lg:flex-row-reverse lg:pb-52 xl:pb-32">
      <Navbar />

      <div className="flex justify-end md:hidden">
        <img
          src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806536/bg-intro-mobile_orpxih.svg"
          alt="bg-header"
          className="w-[43.754rem]"
        />
      </div>
      <div className=" sm:-mt-20 md:-mr-64 xl:-mr-64 lg:-mt-94 lg:-mr-80 xl:-mt-80  ">
        <div className="flex hidden -mr-64 md:block  ">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806493/bg-intro-desktop_ef1myd.svg"
            alt=""
          />
        </div>
        <div className="z-8 -mt-[32.5rem] sm:-mt-[52rem] md:-mt-[60rem] md:ml-20  xl:ml-40 lg:-mt-[60rem] xl:-mt-[55rem]">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806541/image-mockups_gzopwv.png"
            alt="mockup img"
          />
        </div>
      </div>

      <div className="text-center flex flex-col gap-8 items-center px-4 mt-3 sm:max-w-md me-auto ms-auto sm:mt-40 md:mt-10 lg:self-center lg:max-w-lg lg:text-left lg:items-start lg:pl-16">
        <h1 className="text-5xl leading-[55px]">
          Next generation digital banking
        </h1>
        <p className="font-semibold text-grayish-blue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </header>
  );
};

export default Header;
