import React, { useState } from "react";

function Sushi({ sushi, addToPlates, priceRemaining }) {
  const [isEaten, setIsEaten] = useState(false);
  function eatSushi(e) {
    setIsEaten(!isEaten);
    addToPlates(sushi.price);
  }
  console.log(priceRemaining);
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={priceRemaining > sushi.price ? eatSushi : null}
      >
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
