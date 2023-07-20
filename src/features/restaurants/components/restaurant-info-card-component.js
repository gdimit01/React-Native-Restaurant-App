import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
 background-color: white; 
`;

const Cover = styled(Card.Cover)`
padding: 15px; 
background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  color: teal;
`;

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
    return (
        <RestaurantCard elevation={5}>
            <Cover key={name} source={{uri: photos[0]}} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
