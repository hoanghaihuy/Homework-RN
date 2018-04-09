import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as g from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.iconStyle}><Icon name='ios-contact-outline' size={40}/></View>
            <View style={styles.imageView}>
                <Image
                source={require('../assets/logo/LOGO3-04.png')}
                style={styles.imageStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFBFC',
        position: 'absolute',
        height: 70,
        width: g.fullWidth,
        justifyContent: 'flex-start',
        shadowOpacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        height: 50,
        width: 100,
        alignSelf: 'center'
    },
    imageView: {
        alignSelf: 'center',
        paddingLeft: 95
    },
    iconStyle: {
        paddingLeft: 10,
        paddingTop: 10
    }
})

export default Header;