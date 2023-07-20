import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StatusBar } from "react-native";

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: 16px;
  background-color: lightblue;
  justify-content: center;
`;

const ListView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #FFE2EF;
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
