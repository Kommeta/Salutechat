import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import home from '../images/home.png';
import phone from '../images/phone.png';
import add from '../images/add.png';
import message from '../images/message.png';
import user from '../images/user.png';

const Footer = () => {

    return (
        <View style={styles.wrapper}>
            <Image source={home} style={styles.icon}/>
            <Image source={phone} style={styles.icon}/>
            <Image source={add} style={{width:  40, height: 40}}/>
            <Image source={message} style={styles.icon}/>
            <Image source={user} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#cfe7ffb5',
        paddingVertical: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderColor: '#446789',
        borderWidth: 1,
        width: '100%',
        position: 'absolute',
        bottom: -10
    },
    icon: {
        width: 30,
        height: 30
    }
});

export default Footer;