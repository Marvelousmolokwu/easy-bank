import LatestCard from "./LatestCard";

LatestCard;
const Latest = () => {
  return (
    <div className="bg-very-light-gray py-24 px-6  lg:px-16">
      <h2 className="text-3xl text-center md:text-5xl md:text-left">
        Latest Articles
      </h2>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-6 lg:flex lg:gap-10 ">
        <div className="flex flex-col gap-2 md:gap-4 xl:flex-row xl:gap-10">
          <LatestCard
            img={"/src/images/image-currency.jpg"}
            writtenBy="  By Claire Robinson"
            title=" Receive money in any currency with no fees"
            content=" 
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …
"
          />
          <LatestCard
            img={"/src/images/image-restaurant.jpg"}
            writtenBy="    By Wilson Hutton"
            title="  Treat yourself without worrying about money"
            content=" 
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 xl:flex-row xl:gap-10">
          <LatestCard
            img={"/src/images/image-plane.jpg"}
            writtenBy="   By Wilson Hutton
"
            title="
  Take your Easybank card wherever you go"
            content=" 
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
"
          />
          <LatestCard
            img={"/src/images/image-confetti.jpg"}
            writtenBy="   
  By Claire Robinson
"
            title="
  Our invite-only Beta accounts are now live!"
            content=" 
 
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...
"
          />
        </div>
      </div>
    </div>
  );
};

export default Latest;
