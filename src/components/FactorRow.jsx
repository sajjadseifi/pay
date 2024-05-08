import React from "react";

export const FactorRow = ({ title, children }) => {
  return (
    <div className="factor">
      <h4 className="factor-title">{title}</h4>
      <h5 className="factor-value">{children}</h5>
    </div>
  );
};
