import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

import {
  ProfileNavigations,
  ProfileStackParamProps,
} from '@/navigations/stack/profile';
import { Colors } from '@/constants/color';
import { mainBottomNavigationVisibleVar } from '@/stores/common';

import ProfileHomeHeader from '@/screens/profile/component/header/ProfileHomeHeader';
import ManagedStoreList from '@/screens/profile/component/ManagedStoreList';

export const ProfileHomeScreenOptions: StackNavigationOptions = {
  header: () => <ProfileHomeHeader />,
};

interface ProfileHomeScreenProps {
  navigation: ProfileStackParamProps<ProfileNavigations.Home>['navigation'];
}

const ProfileHomeScreen: React.FC<ProfileHomeScreenProps> = ({
  navigation,
}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  const handleMenu = useCallback(
    (navigate: ProfileNavigations) => {
      return () => {
        navigation.push(navigate);
      };
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView bounces={false}>
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={handleMenu(ProfileNavigations.CreateStore)}
          activeOpacity={0.65}
        >
          <Text style={styles.title}>가게 등록</Text>
        </TouchableOpacity>

        <ManagedStoreList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
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

export default ProfileHomeScreen;
