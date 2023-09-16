import React from "react";

const Numberdisplay = ({ numeroAtual, numeroAnterior, operator }) => {
  return (
    <div className="Numberdisplaydiv">
      <p>
        {numeroAnterior} {operator}
      </p>
      <h1>{numeroAtual}</h1>
    </div>
  );
};

export default Numberdisplay;
