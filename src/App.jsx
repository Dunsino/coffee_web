import React from "react";
import Hero from "./assets/components/Hero/Hero";
import Services from "./assets/components/Services/Services";
import WhereToBuy from "./assets/components/WhereToBuy/WhereToBuy";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
    </div>
  );
};

export default App;
