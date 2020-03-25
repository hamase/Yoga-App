import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <ImageBackground
        source={require('./assets/images/mainBack.jpg')}
        style={styles.mainBackground}>
        <View style={styles.flexEnd}>
          <View style={styles.mainText}>
            <Text style={styles.mainTextTitle}>YOGA</Text>
            <Text style={styles.mainTextDesc}>
              A yoga teacher in your pocket
            </Text>
            <TouchableOpacity style={styles.mainBtn}>
              <Text style={styles.mainBtnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    resizeMode: 'center',
  },
  flexEnd: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainText: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40%',
    marginBottom: 60,
  },
  mainTextTitle: {
    color: '#fff',
    fontSize: 65,
    fontFamily: 'SweetSansProMedium',
  },
  mainTextDesc: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'SweetSansProMedium',
    width: '40%',
    marginBottom: 40,
    textAlign: 'center',
  },
  mainBtn: {
    backgroundColor: '#8147de',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 15,
  },
  mainBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'SweetSansProMedium',
  },
});

export default App;
