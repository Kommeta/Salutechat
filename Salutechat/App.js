import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header';
import Conversations from './components/Conversations/Conversations';
import Footer from './components/Footer';
import Stories from './components/Stories';


const App = () => {

  return (
    <LinearGradient colors={['#fff', '#f2ffe5', '#d3ffa4']} start={{x: 1, y: 0.7}} style={styles.linearGradient}>
      <Header/>
      <ScrollView>
        <Stories/>
        <Conversations/>
      </ScrollView>
      <Footer/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5
  },
});

export default App;
