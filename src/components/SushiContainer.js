import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, addToPlates, priceRemaining }) {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(4);
  const sushisPerPage = sushis.slice(sliceStart, sliceEnd);

  function showMoreSushis() {
    setSliceStart(sliceStart + 4);
    setSliceEnd(sliceEnd + 4);
  }
  const renderSushi = sushisPerPage.map((sushi) => (
    <Sushi
      key={sushi.id}
      sushi={sushi}
      addToPlates={addToPlates}
      priceRemaining={priceRemaining}
    />
  ));

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onMoreButtonClick={showMoreSushis} />
    </div>
  );
}

export default SushiContainer;
