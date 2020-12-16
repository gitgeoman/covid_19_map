import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./Header.css";

function Header() {
  const [{ dayOnMapNumber }] = useStateValue({});

  return (
    <div className="header">
      <h3>Covid situation </h3>
      <div>
        <h6>
          Map of{" "}
          <span style={{ color: "green" }}>
            {dayOnMapNumber ? ` ${dayOnMapNumber} th ` : " present "}
          </span>
          day of pandemy.
        </h6>
      </div>
    </div>
  );
}
export default Header;
