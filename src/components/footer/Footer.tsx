import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>{`© 2021 Flute Finance`}</FooterText>
        </FooterContainer>
    );
};

const FooterText = styled.div`
  font-family: Actor;
  font-size: 15px;
`;

const FooterContainer = styled.div`
height: 85px;

display: flex;
justify-content: center;
align-items: center;

background: white;
`;
