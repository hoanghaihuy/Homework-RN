import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import * as g from "../../constants";
import { TabNavigator } from "react-navigation";
import AdditionalTab from "./tabs/AdditionalTab";
import BookingTab from "./tabs/BookingTab";
import MyTicketTab from "./tabs/MyTicketTab";
import TicketMarketTab from "./tabs/TicketMarketTab";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header />
          <MainNavigator>
            <View>
              <Text>This is main screen</Text>
            </View>
          </MainNavigator>
      </View>
    );
  }
}

const MainNavigator = TabNavigator(
  {
    BookingTab: {
      screen: BookingTab,
    },
    MyTicketTab: {
      screen: MyTicketTab,
    },
    TicketMarketTab: {
      screen: TicketMarketTab,
    },
    AdditionalTab: {
      screen: AdditionalTab,
    },
  },
  {
      animationEnabled: true,
      swipeEnabled: true,
      tabBarPosition: 'bottom',
      tabBarOptions: {
          showIcon: true,
          showLabel: false,
          style: {
              backgroundColor: '#FAFBFC',
              shadowOpacity: 0.07,
              shadowRadius:10,
            //   shadowOffset: {width:-100, height:-10},
              
          }
      },

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
