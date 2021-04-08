import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export const FirstPane = () => {
  return (
    <Pane>
      <FirstPaneContainer>
        <FirstPaneContent>
          <Logo src={logo} />
          <Title>Champagne Finance</Title>
          <SubTitle>A scalable, decentralised, capital-efficient options exchange built on Solana</SubTitle>
          <WeHaveAbsolutelyNothingToShowAtTheMoment>Launching Soon</WeHaveAbsolutelyNothingToShowAtTheMoment>
        </FirstPaneContent>
      </FirstPaneContainer>
    </Pane>
  );
};

// TODO: Set fonts at top level
const WeHaveAbsolutelyNothingToShowAtTheMoment = styled.div`
    background: white;
    padding: 15px;
    border-radius: 26px;
    margin: 10px;
`;
const Logo = styled.img`
    box-shadow: 0px 3px 4px 0px #a4a4a4;
    border-radius: 100%;
`;

const Title = styled.div`
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 47px;
  line-height: 120%;
  text-align: center;

  color: #A0855E;
   
  margin: 15px;
`;

const SubTitle = styled.div`
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  text-align: center;

  color: ${props => props.theme.brown[9]};
  margin: 10px;
`;

const FirstPaneContainer = styled.div`
  height: 100%;  
  width: 100%;  
`;

const FirstPaneContent = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingPageContainer = styled.div``;
// TODO: Expose this for use through out all components
const Pane = styled.div`
  height: 95vh;
  width: 100%;
  background: ${props => props.theme.brown[1]}
`;
