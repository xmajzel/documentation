import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../../../info/organization";
import DecoratedLayout from "../../../../theme/DecoratedLayout";
import {PageHeader} from "../../PageHeader";
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {GradientText} from "../../../GradientText";
import {CoolButton} from "../../../buttons/CoolButton";
import {MoreFeatures} from "../MoreFeatures";
import {FeatureHeader} from "../FeatureHeader";

export const ActivityLogFeature = () => {
  return (
    <>
      <FeatureHeader title="Activity log" id="activity-log"/>
      <TwoColumnSection>
        <ImageColumn/>
        <TextColumn>
          <TextColumnTitle>Watch the growth.</TextColumnTitle>
          <TextColumnText>
            See who modified, reviewed or commented the phrases in your project. Clearly.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}