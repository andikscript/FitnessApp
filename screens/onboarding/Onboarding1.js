import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';
import * as Progress from 'react-native-progress';

const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <LinearGradient
        useAngle={true}
        angle={90}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[COLORS.blueyoung, COLORS.purpleyoung]}
        style={styles.boxImage}>
        <Image
          source={require('../../assets/image/onboarding1.png')}
          style={styles.image}
        />
      </LinearGradient>
      <View style={styles.boxText}>
        <Text style={styles.heading}>Track Your Goal</Text>
        <Text style={styles.desc}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals.
        </Text>
      </View>
      <View style={styles.progress}>
        <Progress.Circle
          size={75}
          progress={0.25}
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
    borderBottomLeftRadius: 190,
    borderBottomRightRadius: 280,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 1,
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

export default Onboarding1;