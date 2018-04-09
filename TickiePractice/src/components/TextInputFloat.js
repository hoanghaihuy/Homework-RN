import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TextInput,
} from "react-native";
import * as g from "../../constants";

export default class TextInputFloat extends Component {
  state = {
    isFocused: false,
    inputText: null
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { 
      label,
      colorBeforeFloat,
      colorAfterFloat,
      textInputColor, 
      ...props } = this.props;
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [this.props.colorBeforeFloat, this.props.colorAfterFloat],
      }),
    };
      const textInputStyle = {
        height: 26 * g.height,
            fontSize: 15,
            width: 330 * g.width,
            color: this.props.textInputColor,
            borderBottomWidth: 1,
            borderBottomColor: "#FFFFFF50",
      }    
    return (
      <View style={{ paddingTop: 18, alignSelf: "center" }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={textInputStyle}
          onFocus={this.handleFocus}
          onBlur={this.state.inputText ? this.handleFocus : this.handleBlur}
          onChangeText={(text) => this.setState({inputText: text})}
          blurOnSubmit
        />
      </View>
    );
  }
}
