import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';

const SignUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.heading}>
        <View style={styles.boxHeading}>
          <Text style={styles.h1}>Hey There,</Text>
          <Text style={styles.h2}>Create and account</Text>
        </View>
        <View style={styles.boxSign}>
          {/* first name */}
          <View style={styles.boxInput}>
            <Icon name="account-outline" size={22} color={'#656565'} />
            <TextInput placeholder="First Name" style={styles.input} />
          </View>
          {/* last name */}
          <View style={styles.boxInput}>
            <Icon name="account-outline" size={22} color={'#656565'} />
            <TextInput placeholder="Last Name" style={styles.input} />
          </View>
          {/* email */}
          <View style={styles.boxInput}>
            <Icon name="email-outline" size={22} color={'#656565'} />
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          {/* password */}
          <View style={styles.boxInput}>
            <Icon name="lock-outline" size={22} color={'#656565'} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={showPassword}
            />
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-off-outline': 'eye-outline'}
                  size={20}
                  color={'#656565'}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* checklist */}
          <View style={styles.boxCheck}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.term}>
              By continuing you accept our{' '}
              <Text style={{textDecorationLine: 'underline'}}>
                Privacy Policy
              </Text>{' '}
              and{' '}
              <Text style={{textDecorationLine: 'underline'}}>Term of Use</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <LinearGradient
            useAngle={true}
            angle={90}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={[COLORS.blueyoung, COLORS.purpleyoung]}
            style={styles.button}>
            <Text style={styles.register}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.boxOr}>
          <View style={styles.line}></View>
          <Text style={styles.textOr}>Or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.boxSocmed}>
          <TouchableOpacity style={styles.boxGoogle}>
            <Image
              source={require('../../assets/image/google.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxGoogle}>
            <Image
              source={require('../../assets/image/fb.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.already}>
            Already have an account?{' '}
            <Text style={{color: 'purple'}}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
  },
  heading: {
    flex: 2,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 40
  },
  boxHeading: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  h1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },
  boxSign: {
    flex: 3,
    backgroundColor: 'white',
  },
  boxInput: {
    backgroundColor: '#fafafa',
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#656565',
    flex: 1,
  },
  boxCheck: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  term: {
    marginLeft: 10,
    marginRight: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#656565',
  },
  bottom: {
    flex: 1.2,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  register: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'white',
  },
  boxOr: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#656565',
  },
  textOr: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#656565',
  },
  boxSocmed: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
  boxGoogle: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
    borderColor: '#656565',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  already: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#656565',
  },
});

export default SignUp;