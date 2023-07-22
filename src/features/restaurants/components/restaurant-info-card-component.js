import React from "react";
import styled from "styled-components/native";
//import { Text, StyleSheet } from "react-native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
import { Spacer } from "./spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
 background-color: white; 
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;


const Cover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: white;
`;

const Address = styled.Text`
padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
  
  
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  
  
`;

const Info = styled.View `
padding: ${(props) => props.theme.space[3]};`;

const Rating = styled.View `
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};`;

const Section = styled.View `
flex-direction: row;
aligned-items: center;
`;

const SectionEnd = styled.View `
flex: 1;
flex-direction: row;
justify-content: flex-end;`;

const Open = styled(SvgXml)`
flex-direction: row;
`;

export const RestaurantInfoCard = ({restaurant = {} }) => {
const {
    name = 'Norm Diner',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg"
],
    
    address = "100 fakestreet", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily = true,
} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
