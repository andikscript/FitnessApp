import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';

const Onboarding1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
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
        style={{
          flex: 1,
          borderBottomLeftRadius: 190,
          borderBottomRightRadius: 280,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/image/onboarding1.png')}
          style={{
            width: 200,
            height: 300,
            marginBottom: 1,
          }}
        />
      </LinearGradient>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Poppins-Bold',
            color: COLORS.black,
            marginTop: 20,
            marginLeft: 20,
          }}>
          Track Your Goal
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Light',
            color: COLORS.black,
            marginHorizontal: 20,
            marginTop: 5,
            textAlign: 'justify',
          }}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals.
        </Text>
      </View>
      <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20}}>
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[COLORS.blueyoung, COLORS.purpleyoung]}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Icon name='chevron-right' size={30} color={'white'} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Onboarding1;