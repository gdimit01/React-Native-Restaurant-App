import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";

export const RestaurantsScreen = () =>(
<SafeAreaView style={styles.safeArea}>
        <View style={styles.searchView}>
          <Searchbar />
        </View>
        <View style={styles.listView}>
          <RestaurantInfoCard/>
        </View>
      </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchView: {
    padding: 16,
    backgroundColor: "lightblue",
    justifyContent: "center",
  },
  listView: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  listText: {
    fontSize: 24,
    color: "white",
  },
});
