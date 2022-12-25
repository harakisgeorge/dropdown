import React, { useState } from "react";

import { DropdownActions } from "./DropdownActions";
import { DropdownFilter } from "./DropdownFilter";

function App() {
  const [color, setColor] = useState("white");
  const handleMenuOne = () => {
    prompt("Action 1");
  };

  const handleMenuTwo = () => {
    prompt("Action 2");
  };
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <DropdownActions
        defaultDisplayName={"Select action"}
        menu={[handleMenuOne, handleMenuTwo]}
      />
      <DropdownFilter
        color={color}
        setColor={setColor}
        menu={["white", "blue", "red"]}
      />
    </div>
  );
}

export default App;
