import React from "react";
import { LandingPageContainer, FirstPane } from "../components/home/FirstPane";
import { SecondPane } from "../components/home/SecondPane";

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <FirstPane />
      <SecondPane />
    </LandingPageContainer>
  );
};


