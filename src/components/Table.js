import React from "react";

function Table({ plates = [], priceRemaining }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have:
        {priceRemaining > 10
          ? "$" + priceRemaining + " remaining!"
          : "$" + priceRemaining + " remaining! HAHAHA! YA BROKE ! ! ! !"}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
