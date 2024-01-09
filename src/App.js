import React from "react";
import Showcase from "./components/Showcase";
import Header from "./components/Header";
import Designed from "./components/Design";
import Free from "./components/Free";
import Footer from "./components/Footer";
import State from "./components/State";
const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Designed />
      <State />
      <Free />
      <Footer />
    </>
  );
};

export default App;
