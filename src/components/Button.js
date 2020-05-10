import React from "react";
import styled from "styled-components";

export const Button = ({ label, handleClick, ...otherProps }) => {
  return (
    <>
      <StyledButton onClick={handleClick} {...otherProps}>
        {label}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  font-family: "Fjalla One", sans-serif;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
`;
