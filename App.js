import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { spacing } from "./src/utils/sizes";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState(null);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.lg,
  },
  list: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: "orange",
  },
});
