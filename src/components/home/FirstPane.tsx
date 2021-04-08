import React from "react";
import styled from "styled-components";
import fluteLogo from "../../assets/logo.png";
import solanaLogo from "../../assets/solana.svg";
import serumLogo from "../../assets/serum.svg";
import { Twitter } from "@styled-icons/bootstrap/Twitter"

export const FirstPane = () => {
  return (
    <Pane>
      <TwitterLogo />
      <FirstPaneContainer>
        <FirstPaneContent>
          <Logo src={fluteLogo} />
          <Title>Champagne Finance</Title>
          <SubTitle>A scalable, decentralised, capital-efficient options exchange built on Solana</SubTitle>
          <WeHaveAbsolutelyNothingToShowAtTheMoment>Launching Soon</WeHaveAbsolutelyNothingToShowAtTheMoment>
          <LogoContainer>
            <SecondaryLogo src={solanaLogo} />
            <SecondaryLogo src={serumLogo} />
          </LogoContainer>
        </FirstPaneContent>
      </FirstPaneContainer>
    </Pane>
  );
};

const TwitterLogo = styled(Twitter)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 100%);

  height: 50px;
  width: 50px;

  color: white;
  filter: drop-shadow(2px 3px 3px #737373);


  &:hover {
    transform: translate(-100%, 100%) scale(1.2); 
  }
  transition: transform 250ms ease-out;

`;

const SecondaryLogo = styled.img`
  margin: 10px
`;

const LogoContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
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
  background: ${props => props.theme.brown[1]};
  position: relative;
`;
