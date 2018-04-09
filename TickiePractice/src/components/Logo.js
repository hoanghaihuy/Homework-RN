import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as g from '../../constants';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo/LOGO3-05.png")} style={styles.imageStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
      alignSelf: 'center'    
  },
  imageStyle: {
      width: 220 * g.width,
      height: 75 * g.height,
  }
});

export default Logo;
