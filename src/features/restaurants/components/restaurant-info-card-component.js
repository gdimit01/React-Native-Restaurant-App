import React from "react";
import styled from "styled-components/native";
//import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
 background-color: white; 
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

export const RestaurantInfoCard = ({restaurant = {} }) => {
const {
    name = 'Norm Diner',
    icon,
    photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg"
],
    
    address = "100 fakestreet", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily,
} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));



return (
        <RestaurantCard elevation={5}>
            <Cover key={name} source={{uri: photos[0]}} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                {ratingArray.map((_, i) => (
                    <SvgXml key={i} xml={star} width={20} height={20}/>
                ))}
                <SvgXml xml={star} width={20} height={20}/>
                </Rating>
                <Address>{address}</Address>
                </Info>
        </RestaurantCard>
    );
};
