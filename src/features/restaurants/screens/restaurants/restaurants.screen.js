import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import { SafeArea } from "../../../../components/utility/safe.area.component";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <RestaurantsList>
      <RestaurantInfoCard />
    </RestaurantsList>
  </SafeArea>
);
