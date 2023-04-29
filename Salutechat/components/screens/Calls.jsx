import React from 'react';
import {
    StyleSheet, Text, View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stories from '../Stories';
import Footer from '../Footer';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

const Calls = () => {

    return (
        <LinearGradient colors={['#e3cbe5', '#eee6ef', '#fff', '#eee6ef', '#e3cbe5']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
            <Header/>
                <ScrollView>
                    <Stories/>
                    <View>
                        <Text>Calls ...</Text>
                    </View>
                </ScrollView>
            <Footer/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5
    },
});

export default Calls;