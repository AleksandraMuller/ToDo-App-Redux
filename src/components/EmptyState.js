import React from "react";
import flamenco from "../assets/flamenco.png";
import styled from "styled-components";

export const EmptyState = () => {
  return (
    <div>
      <Image src={flamenco} alt="empty list"></Image>
      <Text>
        <h2>No todos</h2>
        <p>You do not have any new todos</p>
        <Attribution>Attribution: https://icons8.com</Attribution>
      </Text>
    </div>
  );
};

const Image = styled.img`
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const Attribution = styled.p`
  font-size: 0.7rem;
  margin-top: 4rem;
`;
