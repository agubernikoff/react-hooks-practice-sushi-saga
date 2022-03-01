import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setSushis(data));
  }, []);

  console.log(sushis);

  function addToPlates(something) {
    setPlates([...plates, something]);
  }
  console.log(plates);

  const totalSushiPrice =
    plates.length >= 1
      ? plates.reduce(
          (initialvalue, currentvalue) => initialvalue + currentvalue
        )
      : plates;

  const priceRemaining = 100 - totalSushiPrice;

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        addToPlates={addToPlates}
        priceRemaining={priceRemaining}
      />
      <Table plates={plates} priceRemaining={priceRemaining} />
    </div>
  );
}

export default App;
