import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="spinner__bootstrap">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export default Loading;
