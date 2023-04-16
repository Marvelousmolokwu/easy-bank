import React from "react";
import { ReactDOM } from "react-dom";

const Cards = (props) => {
  return (
    <div className="card flex flex-col gap-4 items-center sm:max-w-md me-auto ms-auto md:items-start md:text-left lg:me-0 lg:ms-0 lg:max-w-[100%] lg:items-start lg:m-0 ">
      <img src={props.image} alt="pic" />
      <h2 className="text-3xl">{props.name}</h2>
      <p className="text-grayish-blue">{props.contents}</p>
    </div>
  );
};

export default Cards;
