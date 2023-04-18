import Cards from "./cards";
const Main = () => {
  return (
    <main className=" bg-light-grayish-blue px-10 py-24 text-center text-lg lg:-mt-72 lg:text-left">
      <div className="mb-20 me-auto ms-auto sm:max-w-md lg:pl-8 lg:me-0 lg:ms-0">
        <h2 className="text-4xl "> Why choose Easybank? </h2>
        <p className="text-grayish-blue mt-6">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col gap-16  text-center sm:max-w-md me-auto ms-auto md:flex md:flex-row lg:m-0 lg:max-w-[100%] lg:pl-8 lg:gap-10 ">
        <div className="flex flex-col gap-16 lg:flex lg:flex-row lg:gap-10">
          <Cards
            image="https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806539/icon-online_bd41hq.svg"
            name="Online Banking"
            contents="  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
"
          />
          <Cards
            image={
              "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806537/icon-budgeting_asx2bm.svg"
            }
            name=" Simple Budgeting"
            contents="
 
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits."
          />
        </div>
        <div className="flex flex-col gap-16 lg:flex lg:flex-row lg:gap-10">
          <Cards
            image={
              "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806538/icon-onboarding_r8pchf.svg"
            }
            name="
  Fast Onboarding"
            contents="  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away."
          />
          <Cards
            image={
              "https://res.cloudinary.com/ddgyd8szc/image/upload/v1681806537/icon-api_mlxc79.svg"
            }
            name="  Open API"
            contents="  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier."
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
