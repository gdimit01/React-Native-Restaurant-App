import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: {padding: 15, backgroundColor: "white"},
    title: {padding: 16, fontWeight: "bold"}
});