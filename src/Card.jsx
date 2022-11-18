import React from "react";

const Card = ({ data, current, previous, previousTitle }) => {
  return (
    <>
      <div
        style={{ backgroundColor: `${data.backgroundColor}` }}
        className="card relative pt-10 rounded-t-3xl rounded-b-2xl"
      >
        <img
          src={data.icon}
          alt="iconwork"
          className="absolute top-0 right-0 h-15"
        />
        <div className="flex bg-[#1c1f4a] flex-col relative z-10 rounded-2xl p-7">
          <h3 className="text-white text-xl">{data.title}</h3>
          <h1 className="text-white text-4xl mt-4">
            {current}
            <span> hrs</span>
          </h1>
          <p className="text-gray-400 mt-1">
            <span>{previousTitle}</span>
            <span> - </span>
            {previous}
            <span> hrs</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
