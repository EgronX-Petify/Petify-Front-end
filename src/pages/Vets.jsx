import React from "react";
import VetHero from "../components/vets-components/VetHero";
import Available from "../components/vets-components/Available";
import VetFooter from "../components/vets-components/VetFooter";

const Vets = () => {

  return (
    <div>
      <VetHero />
      <Available />
      <VetFooter />
    </div>
  );
};

export default Vets;
