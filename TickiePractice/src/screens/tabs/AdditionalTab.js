import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AdditionalTab extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="ios-menu-outline" style={{ color: tintColor }} size={35}/>;
    },
  };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Additional Tab</Text>
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