import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TextInputFloat from "../components/TextInputFloat";
import Button from "../components/Button";
import ButtonText from "../components/ButtonText";
import LinearGradient from "react-native-linear-gradient";
import Logo from "../components/Logo";
import * as g from "../../constants";

export default class SignUp extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={["#FFC259", "#FF606B"]}
          style={styles.container}
        >
          <View style={styles.logoView}>
            <Logo />
          </View>
          <View style={styles.inputView}>
            <TextInputFloat
              label="Họ và tên"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
            />
            <TextInputFloat
              label="Email"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
              keyboardType="email-address"
            />
            <TextInputFloat
              label="Số điện thoại"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
              keyboardType="phone-pad"
            />
            <TextInputFloat
              label="Tên tài khoản"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
            />
            <TextInputFloat
              label="Mật khẩu"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
              secureTextEntry={true}
            />
            <TextInputFloat
              label="Nhập lại mật khẩu"
              colorBeforeFloat="#FFFFFF"
              colorAfterFloat="#FFFFFF90"
              textInputColor="#FFFFFF"
              selectionColor="#FFFFFF"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              text="SIGN UP"
              buttonColor="#FFFFFF"
              textButtonColor="#FB816D"
            />
            <ButtonText
              text="Return to Login"
              onPress={() => this.props.navigation.goBack()}
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
    height: 100,
    width: 200,
    alignSelf: "center",
    paddingTop: 50,
  },
  inputView: {
    paddingTop: 50,
    height: 375,
    justifyContent: "space-between",
  },
  buttonView: {
    paddingTop: 50,
    height: 150,
    justifyContent: "space-between",
  },
});
