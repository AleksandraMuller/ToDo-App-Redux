import React from "react";

export const Input = ({ handleSubmit, setVar, ...otherProps }) => {
  const handleChange = (event) => {
    setVar(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} {...otherProps} />
      </form>
    </>
  );
};
