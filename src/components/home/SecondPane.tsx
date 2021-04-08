import React from "react";
import styled from "styled-components";
import image from "../../assets/info_logo.svg";

export const SecondPane = () => {
  return (
    <Pane>
      <SecondPaneContent>
        <TextContainer>
          <HeadingContainer>
            <TextTitle>Trade Decentralised Options</TextTitle>
            <TextSubTitle>at the Speed of Light</TextSubTitle>
          </HeadingContainer>
          <Text>
            {`Champagne is the first decentralised options protocol that enables under-collateralized options through portfolio margining and a virtual vault.`}
          </Text>
          <br />
          <Text>
            {`Champagne features blazing low fees, near-instant settlement, fair volatility pricing and deep options liquidity with a hybrid limit orderbook and virtual AMM model.`}
          </Text>
          <OkayWeActuallyHaveSomethingToShow>
            Read Our Litepaper
          </OkayWeActuallyHaveSomethingToShow>
        </TextContainer>
        <ImageContent>
          <Image src={image} />
        </ImageContent>
      </SecondPaneContent>
    </Pane>
  );
};

const OkayWeActuallyHaveSomethingToShow = styled.div`
  padding: 20px;
  background: ${props => props.theme.brown[8]};
  /* color: #c3a98c; */
  color: ${props => props.theme.brown[3]};
  border-radius: 38px;
`;

const HeadingContainer = styled.div`
  margin-bottom: 20px;
`;
const TextTitle = styled.div`
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 120%;

  color: ${props => props.theme.brown[7]};
`;
const TextSubTitle = styled.div`
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 120%;
  color: ${props => props.theme.brown[7]};
`;
const Text = styled.div`
  font-family: Actor;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 140%;
  /* or 34px */

  letter-spacing: 0.01em;

  color: #5E5E5E;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  ${OkayWeActuallyHaveSomethingToShow} {
    position: absolute;
    bottom: 0;
    transform: translateY(150%);
  }
`;

const Image = styled.img``;
const ImageContent = styled.div`
  display: flex;
  justify-content: center;
`;

const SecondPaneContent = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 100px;
  box-sizing: border-box;

  ${TextContainer} {
    flex-grow: 1;
    flex-basis: 0;
  }

  ${ImageContent} {
    flex-grow: 1;
    flex-basis: 0;
  }
`;


export const LandingPageContainer = styled.div``;
const Pane = styled.div`
  height: 95vh;
  width: 100%;
  background: '#E5E5E5'
`;
