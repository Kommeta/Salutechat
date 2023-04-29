import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './useAuth';
import Conversation from './components/screens/Conversation';
import Chat from './components/screens/Chat';
import Calls from './components/screens/Calls';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';

const Stack = createStackNavigator();

const StackNavigations = () => {

    const { user } = useAuth()

    return (
        <Stack.Navigator >
            {user ? 
                <>
                    <Stack.Screen name="Chat" component={Chat} 
                        options={{
                            headerShown: false,
                    }} />
                    <Stack.Screen name="Conversation" component={Conversation}
                        options={{
                            headerShown: false, 
                    }}/>
                    <Stack.Screen name="Calls" component={Calls}
                        options={{
                            headerShown: false, 
                    }}/>
                    <Stack.Screen name="Profile" component={Profile}
                        options={{
                            headerShown: false, 
                    }}/>
                </>
                :
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false, 
                }}/>
            }
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
});

export default StackNavigations;