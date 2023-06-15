import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { spacing } from "../../../utils/sizes";

const Title = styled.Text`
  padding: ${spacing.lg}px;
  color: black;
`;

const RestaurantCard = styled(Card)`
  padding: ${spacing.lg}px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some street address",
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
