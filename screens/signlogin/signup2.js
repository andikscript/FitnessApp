import React, {useState} from 'react';
import { Image, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants';

const SignUp2 = () => {
  const [showGender, setShowGender] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.header}>
        <View style={styles.boxImage}>
          <Image
            source={require('../../assets/image/profilesignup.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textHeading}>Let's complete your profile</Text>
          <Text style={styles.desc}>
            It will help us to know more about you!
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.boxSign}>
          {/* gender */}
          <View style={styles.boxInput}>
            <Icon
              name="account-multiple-outline"
              size={22}
              color={COLORS.gray}
            />
            <TextInput placeholder="Choose Gender" style={styles.input} />
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={() => setShowGender(!showGender)}>
                <Icon
                  name={showGender ? 'chevron-down' : 'chevron-up'}
                  size={20}
                  color={COLORS.gray}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* date of birth */}
          <View style={styles.boxInput}>
            <Icon name="calendar-range" size={22} color={COLORS.gray} />
            <TextInput placeholder="Date of Birth" style={styles.input} />
          </View>
          {/* your weight */}
          <View style={styles.boxHW}>
            <View style={styles.boxInputHW}>
              <Icon name="scale-bathroom" size={22} color={COLORS.gray} />
              <TextInput placeholder="Your Weight" style={styles.input} />
            </View>
            <LinearGradient
              useAngle={true}
              angle={90}
              angleCenter={{x: 0.3, y: 0.5}}
              colors={[COLORS.phlox, COLORS.thistle]}
              style={styles.boxScale}>
              <Text style={styles.textScale}>KG</Text>
            </LinearGradient>
          </View>
          {/* your height */}
          <View style={styles.boxHW}>
            <View style={styles.boxInputHW}>
              <Icon name="swap-vertical" size={22} color={COLORS.gray} />
              <TextInput placeholder="Your Height" style={styles.input} />
            </View>
            <LinearGradient
              useAngle={true}
              angle={90}
              angleCenter={{x: 0.3, y: 0.5}}
              colors={[COLORS.phlox, COLORS.thistle]}
              style={styles.boxScale}>
              <Text style={styles.textScale}>CM</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <LinearGradient
            useAngle={true}
            angle={90}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={[COLORS.blueyoung, COLORS.purpleyoung]}
            style={styles.button}>
            <Text style={styles.register}>Next</Text>
            <View style={{marginBottom: 3}}>
              <Icon name="chevron-right" size={20} color={COLORS.white} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  boxImage: {
    height: 205,
    width: 270,
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  boxText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 15,
  },
  textHeading: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: COLORS.black,
  },
  body: {
    flex: 0.7,
    backgroundColor: COLORS.white,
  },
  boxSign: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boxInput: {
    backgroundColor: COLORS.whiteGray,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  boxHW: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  boxInputHW: {
    backgroundColor: COLORS.whiteGray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
    width: '78%',
  },
  boxScale: {
    height: 49,
    width: 50,
    marginLeft: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textScale: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
  },
  input: {
    backgroundColor: COLORS.transparent,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.gray,
    flex: 1,
  },
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 40,
    marginBottom: 20,
    flexDirection: 'row',
  },
  register: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.white,
    marginRight: 5,
  },
  footer: {
    flex: 0.2,
    backgroundColor: COLORS.white,
    justifyContent: 'flex-end',
  },
});

export default SignUp2;