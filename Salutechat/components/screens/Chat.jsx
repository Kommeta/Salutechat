import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stories from '../Stories';
import ConversationsList from '../Conversations/ConversationsList';
import Footer from '../Footer';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';

const Chat = () => {

    return (
        // <LinearGradient colors={['#c226cbd6', '#e1a4e599', '#fff', '#fff', '#c226cbd6']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
        <LinearGradient colors={['#e3cbe5', '#eee6ef', '#fff', '#eee6ef', '#e3cbe5']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
            <Header/>
                <ScrollView>
                    <Stories/>
                    <ConversationsList/>
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

export default Chat;