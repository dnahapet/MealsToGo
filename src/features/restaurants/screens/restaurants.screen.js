import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { spacing } from "../../../utils/sizes";

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${spacing.lg}px;
`;

const RestaurantsList = styled.View`
  flex: 1;
  padding: ${spacing.lg}px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeAreaContainer>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <RestaurantsList>
      <RestaurantInfoCard />
    </RestaurantsList>
  </SafeAreaContainer>
);
