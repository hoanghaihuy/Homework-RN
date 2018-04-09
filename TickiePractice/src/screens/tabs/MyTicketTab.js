import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyTicketTab extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="ios-bookmarks-outline" size={35} style={{ color: tintColor }} />;
    },
  };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is My Ticket Tab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})