import desktopimage from "../images/illustration-laptop-desktop.svg";
import mobileimage from "../images/illustration-laptop-mobile.svg";
import React from "react";

const Free = () => {
  return (
    <>
      <section className=" pb-20 px-5">
        <div className="flex flex-col text-center   md:grid md:grid-cols-2 md:gap-5 md:items-center md:text-left xl:max-w-7xl xl:mx-auto">
          <div>
            <picture>
              <source media="(min-width: 1024px)" srcset={desktopimage} />
              <img
                src={mobileimage}
                alt="Editor"
                className="w-full block mx-auto mt-10"
              />
            </picture>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl mt-10 mb-5">Free,open,simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h3 className="text-2xl mt-10 mb-5">Powerful Tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Free;
