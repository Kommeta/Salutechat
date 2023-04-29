import React from 'react';
import {
    StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../useAuth';
import Stories from '../Stories';
import Footer from '../Footer';
import Header from '../Header';
import { COLORS } from '../../constants';

const Profile = () => {

    const { logout } = useAuth()

    return (
        <LinearGradient colors={['#e3cbe5', '#eee6ef', '#fff', '#eee6ef', '#e3cbe5']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
            <Header/>
                <ScrollView>
                    <Stories/>
                    <View>
                        <Text style={{textAlign: 'center'}}>Profile</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', marginVertical: 10}}>Выход из приложения</Text>
                        <TouchableOpacity onPress={logout} style={{ marginVertical: 15, backgroundColor: COLORS.salut, paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>Выйти</Text>
                        </TouchableOpacity>
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

export default Profile;