import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';
import * as Progress from 'react-native-progress';

const Onboarding3 = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <View
        style={styles.boxImage}>
        <Image
          source={require('../../assets/image/onboarding3.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.boxText}>
        <Text style={styles.heading}>Eat Well</Text>
        <Text style={styles.desc}>
          Let's start a healthy lifestyle with us, we can 
          determine your diet every day. Healthy eating is fun
        </Text>
      </View>
      <View style={styles.progress}>
        <Progress.Circle
          size={75}
          progress={0.75}
          borderColor="transparent"
          endAngle={0.5}
          indeterminate={false}
          color={COLORS.purpleyoung}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[COLORS.blueyoung, COLORS.purpleyoung]}
          style={styles.gradient}>
          <Icon name="chevron-right" size={30} color={'white'} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boxImage: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    marginBottom: 1,
    width: '100%',
    height: '100%',
  },
  boxText: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    marginTop: 20,
    marginLeft: 20,
    width: 200,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: COLORS.black,
    marginHorizontal: 20,
    marginTop: 5,
  },
  progress: {
    position: 'absolute',
    bottom: 12.5,
    right: 12.5,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  gradient: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding3;