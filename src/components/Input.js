import React from "react";
import styled from "styled-components";

export const Input = ({ handleSubmit, setVar, ...otherProps }) => {
  const handleChange = (event) => {
    setVar(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField onChange={handleChange} {...otherProps} />
      </form>
    </>
  );
};

const InputField = styled.input`
  margin: 1.5rem 0;
`;
