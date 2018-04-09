import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard, StatusBar
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../components/Button";
import TextInputFloat from "../components/TextInputFloat";
import ButtonText from "../components/ButtonText";
import Logo from "../components/Logo";
import * as g from "../../constants";
import {
    SignUpScreen
} from '../../Screens';
import SignUp from './SignUp';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { navigation } = this.props;      
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#FFC259', '#FF606B']}
          style={styles.container}
        >
        <StatusBar barStyle='light-content'/>
          <View style={styles.logoView}>
            <Logo />
          </View>
          <View style={styles.loginView}>
            <TextInputFloat
              label="Email"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
            />
            <TextInputFloat
              label="Password"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              secureTextEntry={true}
              selectionColor="#FFFFFF"
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              text="LOGIN"
              buttonColor="#FFFFFF"
              textButtonColor="#FB816D"
            />
            <ButtonText 
                text="Sign up"
                onPress={() => {navigation.navigate(SignUpScreen)}}
            />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    paddingTop: 135 * g.height,
  },
  loginView: {
    paddingTop: 135 * g.height,
    height: 240 * g.height,
    justifyContent: "space-between",
  },
  buttonView: {
    paddingTop: 80 * g.height,
    height: 200,
    justifyContent: 'space-between'
  },
});
