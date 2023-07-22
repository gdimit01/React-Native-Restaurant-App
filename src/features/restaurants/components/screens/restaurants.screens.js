import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StatusBar } from "react-native";


// 
const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

//Search Container
const SearchView = styled.View`
  padding: ${props => props.theme.space[3]};
`;

//The list of restaurants
const ListView = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <StyledSafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfoCard/>
    </ListView>
  </StyledSafeArea>
)
