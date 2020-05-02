import React from "react";

export const Input = ({ handleChange, handleSubmit, ...otherProps }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} {...otherProps} />
      </form>
    </>
  );
};
