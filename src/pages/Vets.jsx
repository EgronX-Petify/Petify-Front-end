import React from "react";
import VetHero from "../components/vets-components/VetHero";
import Available from "../components/vets-components/Available";
import VetFooter from "../components/vets-components/VetFooter";
import VetBook from "../components/vets-components/VetBook";
import UseVets from "../hooks/UseVets";

const Vets = () => {
  const vets = UseVets();

  return (
    <div>
      <VetHero />
      <Available vets={vets} />
      <VetFooter />
    </div>
  );
};

export default Vets;
