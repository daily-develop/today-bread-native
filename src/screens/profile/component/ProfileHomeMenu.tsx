import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '@/constants/color';
import {
  ProfileNavigations,
  ProfileStackParamProps,
} from '@/navigations/stack/profile';

type navigationProp =
  ProfileStackParamProps<ProfileNavigations.Home>['navigation'];

interface ProfileHomeMenuProps {}

const ProfileHomeMenu: React.FC<ProfileHomeMenuProps> = ({}) => {
  const navigation = useNavigation<navigationProp>();

  const handleMenu = useCallback(
    (navigate: ProfileNavigations) => {
      return () => {
        navigation.push(navigate);
      };
    },
    [navigation]
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={handleMenu(ProfileNavigations.CreateStore)}
        activeOpacity={0.65}
      >
        <Text style={styles.title}>가게 등록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.lightGray,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.black,
  },
});

export default ProfileHomeMenu;
