import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

export default class Button extends Component {
  render() {
    const { text, buttonColor, textButtonColor, iconSource } = this.props;
    return (
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: this.props.buttonColor,
            height: 50,
            width: 328,
            alignSelf: "center",
            borderRadius: 30,
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              color: this.props.textButtonColor,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
