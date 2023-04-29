import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigations from './StackNavigations';
import { AuthProvider } from './useAuth';


const App = () => {

  return (
    <NavigationContainer> 
      <AuthProvider>
        <StackNavigations/>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});

export default App;
