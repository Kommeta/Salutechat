import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
} from 'react-native';
import logo from '../images/salut-logo.png';
import search from '../images/search.png';

const Header = () => {

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
            <View>
                <TouchableHighlight>
                    <Image
                        source={logo}
                        style={{width:  50, height: 50}}
                    />
                </TouchableHighlight>
            </View>
            <View>
                <Image source={search}
                style={{width:  25, height: 25}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default Header;