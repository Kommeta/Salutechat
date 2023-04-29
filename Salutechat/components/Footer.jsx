import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Link, useRoute } from '@react-navigation/native';
import doc from '../images/doc.png';
import docGrey from '../images/doc-grey.png';
import phone from '../images/phone.png';
import phoneGrey from '../images/phone-grey.png';
import add from '../images/add.png';
import addGrey from '../images/add-grey.png';
import chat from '../images/messages.png';
import chatGrey from '../images/messages-grey.png';
import user from '../images/user.png';
import userGrey from '../images/user-grey.png';
import { COLORS } from '../constants';

const Footer = () => {

    const route = useRoute()

    return (
        <View style={styles.wrapper}>
            <Link to={{screen: 'Chat'}} style={{height: 40}} >
                <Image source={route.name === 'Chat' ? chat : chatGrey} style={styles.icon}/>
            </Link>
            <Link to={{screen: 'Calls'}} style={{height: 40}} >
                <Image source={route.name === 'Calls' ? phone : phoneGrey} style={styles.icon}/>
            </Link>
            <TouchableOpacity onPress={() => console.log('add')}>
                <Image source={route.name === 'Add' ? add : addGrey} style={{width:  40, height: 40}}/>
            </TouchableOpacity>
            <Link to={{screen: 'Profile'}} style={{height: 40}}>
                <Image source={route.name === 'Profile' ? user : userGrey} style={styles.icon}/>
            </Link>
            <Link to={{screen: 'Profile'}} style={{height: 40}}>
                <Image source={route.name === 'Informations' ? doc : docGrey} style={styles.icon}/>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: 0.9,
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: COLORS.salutLight,
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '101%',
        position: 'absolute',
        bottom: 0
    },
    icon: {
        width: 30,
        height: 30,
    }
});

export default Footer;