import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";
import React from "react";

const State = () => {
  return (
    <>
      <section className="state py-10 px-5 text-center text-white relative z-10 md:text-left md:grid md:grid-cols-2 xl:px-52">
        <div className="">
          <div>
            <img src={circles} alt="" className="state-img circles " />
          </div>
          <div>
            <img src={phones} alt="" className="state-img " />
          </div>
        </div>
        <div className="pt-80 px-5 md:py-20 lg:px-40 lg:w-900">
          <h2 className="text-center text-3xl mb-5 lg:text-4xl lg:w-1000 2xl:text-4xl text-white md:text-left">
            State of the Art infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
