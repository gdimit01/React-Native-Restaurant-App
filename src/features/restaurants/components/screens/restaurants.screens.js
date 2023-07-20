import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StatusBar } from "react-native";

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}pt;
`;

const SearchView = styled.View`
  padding: 16px;
  background-color: lightblue;
  justify-content: center;
`;

const ListView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
  justify-content: center;
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
