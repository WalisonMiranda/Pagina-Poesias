import React, { useState } from "react";
import "./style.css";

import Close1 from "../../img/close.svg";

export default function Index({ value }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(false);
    if (isOpen === false) {
      setIsOpen(!isOpen);
    } else {
      handleClose();
    }
    setIsOpen(!isOpen);
  };

  const formattedText = value.split("\n\n").map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  return (
    <>
      <div className="card" onClick={handleClick}>
        <p className="textCard">{formattedText}</p>
      </div>
      <div className={isOpen ? "cardOpen animate-appear" : "cardClose animate-disappear"}>
        <div className="close-card">
          <span onClick={handleClose}>
            <img className="icon" src={Close1} alt="Fechar" />
          </span>
        </div>
        <p className="textOpen">{formattedText}</p>
      </div>
    </>
  );
}
