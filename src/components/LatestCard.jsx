import React from "react";
const LatestCard = (props) => {
  return (
    <div className="font-public mt-6 sm:max-w-md me-auto ms-auto md:max-w-lg  lg:max-w-md  ">
      <img
        src={props.img}
        alt=""
        className="rounded-t-lg md:h-64 md:w-full lg:h-52 lg:w-full"
      />
      <div className="bg-white p-6 rounded-b-lg md:p-8 md:h-72 lg:p-6 xl:h-[22rem]">
        <p className="text-grayish-blue">{props.writtenBy}</p>
        <h5 className="text-2xl mt-2 mb-4">{props.title}</h5>
        <p className="text-lg text-grayish-blue">{props.content}</p>
      </div>
    </div>
  );
};

export default LatestCard;
