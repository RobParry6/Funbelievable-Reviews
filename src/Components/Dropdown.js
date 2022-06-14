import { useState } from "react";

function Dropdown(props) {
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Hello World</button>

      <div style={{ display: display }}>{props.children}</div>
    </div>
  );
}

export default Dropdown;
