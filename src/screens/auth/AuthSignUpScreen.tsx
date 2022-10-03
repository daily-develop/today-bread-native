import React, { useCallback, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/color';

import SingleImagePicker from '@/components/SingleImagePicker';
import CustomButton from '@/components/CustomButton';
import Conditional from '@/hocs/Conditional';
import CustomInput from '@/components/CustomInput';
import SizedBox from '@/components/SizedBox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const AuthSignUpScreenOptions: StackNavigationOptions = {
  headerTitle: '',
};

interface AuthSignUpScreenProps {}

const AuthSignUpScreen: React.FC<AuthSignUpScreenProps> = ({}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleSubmit = useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <Text style={styles.title}>회원 정보를 입력해주세요.</Text>
          <View style={styles.profileImageContainer}>
            <SingleImagePicker setImage={setProfileImage}>
              <>
                <Conditional condition={profileImage === null}>
                  <View style={styles.emptyProfileImage}>
                    <Feather name="image" size={30} color="rgba(0,0,0,0.15)" />
                  </View>
                </Conditional>

                <Conditional condition={profileImage !== null}>
                  <Image
                    style={styles.profileImage}
                    source={{ uri: profileImage as string }}
                  />
                </Conditional>

                <View style={styles.cameraContainer}>
                  <Ionicons name="ios-camera" size={22} color={Colors.black} />
                </View>
              </>
            </SingleImagePicker>
          </View>

          <CustomInput title="이름" text={name} setText={setName} />

          <SizedBox height={30} />

          <CustomInput
            title="이메일"
            text={email}
            setText={setEmail}
            props={{ keyboardType: 'email-address' }}
          />

          <SizedBox height={30} />

          <CustomInput
            title="전화번호"
            text={phone}
            setText={setPhone}
            props={{ keyboardType: 'phone-pad' }}
          />

          <SizedBox height={30} />

          <CustomInput title="주소" text={address} setText={setAddress} />
        </KeyboardAwareScrollView>

        <CustomButton label="완료" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 26,
  },
  scrollContainer: {
    paddingTop: 26,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    color: Colors.black,
  },
  profileImageContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyProfileImage: {
    width: 126,
    height: 126,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
  profileImage: {
    width: 126,
    height: 126,
    borderRadius: 100,
  },
  cameraContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
});

export default AuthSignUpScreen;
