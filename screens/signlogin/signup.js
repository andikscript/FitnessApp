import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';

const SignUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}>
            Hey There,
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
            }}>
            Create and Account
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: 'white',
          }}>
          {/* first name */}
          <View
            style={{
              backgroundColor: '#fafafa',
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 10,
            }}>
            <Icon name="account-outline" size={22} color={'#656565'} />
            <TextInput
              placeholder="First Name"
              style={{
                backgroundColor: 'transparent',
                marginLeft: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#656565',
                flex: 1,
              }}
            />
          </View>
          {/* last name */}
          <View
            style={{
              backgroundColor: '#fafafa',
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 10,
            }}>
            <Icon name="account-outline" size={22} color={'#656565'} />
            <TextInput
              placeholder="Last Name"
              style={{
                backgroundColor: 'transparent',
                marginLeft: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#656565',
                flex: 1,
              }}
            />
          </View>
          {/* email */}
          <View
            style={{
              backgroundColor: '#fafafa',
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 10,
            }}>
            <Icon name="email-outline" size={22} color={'#656565'} />
            <TextInput
              placeholder="Email"
              style={{
                backgroundColor: 'transparent',
                marginLeft: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#656565',
                flex: 1,
              }}
            />
          </View>
          {/* password */}
          <View
            style={{
              backgroundColor: '#fafafa',
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 10,
            }}>
            <Icon name="lock-outline" size={22} color={'#656565'} />
            <TextInput
              placeholder="Password"
              style={{
                backgroundColor: 'transparent',
                marginLeft: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#656565',
                flex: 1,
              }}
            />
            <View
              style={{
                margin: 10,
              }}>
              <Icon name="eye-off-outline" size={20} color={'#656565'} />
            </View>
          </View>
          {/* checklist */}
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              style={{
                marginLeft: 10,
                marginRight: 30,
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#656565',
              }}>
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
      <View
        style={{
          flex: 1.2,
          backgroundColor: 'white',
        }}>
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[COLORS.blueyoung, COLORS.purpleyoung]}
          style={{
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            marginHorizontal: 40,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              color: 'white',
            }}>
            Register
          </Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              flex: 1,
              borderColor: '#656565',
            }}></View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: '#656565',
            }}>
            Or
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              flex: 1,
              borderColor: '#656565',
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              borderRadius: 10,
              marginRight: 20,
              borderColor: '#656565',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/image/google.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              borderRadius: 10,
              borderColor: '#656565',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/image/fb.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: '#656565',
            }}>
            Already have an account?{' '}
            <Text
              style={{
                color: 'purple',
              }}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SignUp;