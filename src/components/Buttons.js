import React from "react";

const Buttons = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <button className="border border-white py-2 px-6 rounded-full mt-10">
              Login
            </button>
          </li>
          <li>
            <button className="btn-light bg-white py-2 px-4 rounded-full mt-10">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
