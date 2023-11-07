import React from "react";
import { boxMB } from "../helpers/configs";

const EmptyBox = () => {
  return (
    <>
      <div className="emptyBox"></div>
      <div style={{ marginBottom: boxMB }}></div>
    </>
  );
};

export default EmptyBox;
