import React from "react";
import { container, section } from "../../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "./FeatureStyles.js";

const features = () => {
  return (
    <section  smpadding="50px 10px" position="relative" inverse id='about'>
      <container>
        <FeatureTextWrapper>
          <FeatureTitle>What we Offer</FeatureTitle>
        </FeatureTextWrapper>

        {featuresData.map((el, index) => (
          <FeatureColumn  
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5 + index * 0.1}}
            key={index}
          >

            <FeatureImageWrapper className={el.imgclass}>
             {el.icon}
            </FeatureImageWrapper>
            <FeatureName>{el.name}</FeatureName>
            <FeatureText>{el.description}</FeatureText>
          </FeatureColumn>
        ))}
      </container>
    </section>
  );
};

export default features;
