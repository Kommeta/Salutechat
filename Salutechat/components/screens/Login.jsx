import React, { useState } from 'react';
import {
    StyleSheet, View, Image, Text, TextInput, Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../images/salut-logo2.png'
import { COLORS } from '../../constants';
import { useAuth } from '../../useAuth';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const { login, isLoading, error } = useAuth()

    return (
        <LinearGradient colors={['#e3cbe5', '#eee6ef', '#fff', '#eee6ef', '#e3cbe5']} start={{x: 1.5, y: 0.7}} style={styles.linearGradient}>
            <View style={{marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end'}}>
                <Image
                    source={logo}
                    style={{width:  60, height: 60}}
                />
                <Text style={{color: COLORS.cherry, fontSize: 16, marginLeft: 20}}>Добро пожаловать</Text>
            </View>
            <View style={{marginTop: 50, alignSelf: 'center', width: '80%'}}>
                {error && <Text style={{color: '#df0047', marginBottom: 15, textAlign: 'center'}}>{error}</Text>}
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Введите email'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Введите пароль'б
                    secureTextEntry={true}
                />
                <Button 
                    onPress={async() => await login(email, password)}
                    title={isLoading ? 'Loading...' : 'Войти'}
                    disabled={isLoading}
                    color={COLORS.salut}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.cherry,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15
    }
});

export default Login;