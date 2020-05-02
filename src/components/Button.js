import React from "react";

export const Button = ({ label, handleClick, ...otherProps }) => {
  return (
    <>
      <button onClick={handleClick} {...otherProps}>
        {label}
      </button>
    </>
  );
};
