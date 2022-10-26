import React, { useEffect, useMemo } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { Feather, Ionicons } from '@expo/vector-icons';

import {
  StoreDetailNavigations,
  StoreDetailStackParamProps,
} from '@/navigations/stack/store';

import { mainBottomNavigationVisibleVar } from '@/stores/common';
import { Colors } from '@/constants/color';
import { Store } from '@/domain/store';
import { GET_STORE } from '@/operations/store/query/GetStore';
import Conditional from '@/hocs/Conditional';
import { toPhoneNumber } from '@/utils/toPhoneNumber';

export const StoreDetailHomeScreenOptions: StackNavigationOptions = {
  title: '',
};

interface StoreDetailHomeScreenProps {
  navigation: StoreDetailStackParamProps<StoreDetailNavigations.Home>['navigation'];
  route: StoreDetailStackParamProps<StoreDetailNavigations.Home>['route'];
}

const StoreDetailHomeScreen: React.FC<StoreDetailHomeScreenProps> = ({
  navigation,
  route,
}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(false);
  });

  const [getStore, { data }] = GET_STORE();

  const store = useMemo<Store | null>(() => data?.store ?? null, [data]);

  useEffect(() => {
    getStore({ variables: { storeId: route.params.storeId } });
  }, [route.params.storeId]);

  useEffect(() => {
    if (store !== null) {
      navigation.setOptions({
        title: store?.name,
      });
    }
  }, [store?.name]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Conditional condition={store !== null}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.storeImageContainer}>
              <Image
                style={styles.storeImage}
                source={{ uri: store?.image?.url }}
              />
            </View>

            <Text style={styles.description}>{store?.description}</Text>

            <Text style={styles.infoMessage}>
              <Ionicons
                name="ios-location-outline"
                size={16}
                color={Colors.primary}
              />
              {` ${store?.location}`}
            </Text>

            <Text style={styles.infoMessage}>
              <Feather name="phone" size={16} color={Colors.primary} />
              {` ${toPhoneNumber(store?.phone ?? '')}`}
            </Text>
          </View>
        </View>
      </Conditional>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: Colors.lightGray,
  },
  storeImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  storeImage: {
    width: 126,
    height: 126,
    borderRadius: 20,
  },
  description: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.black,
    marginBottom: 6,
    alignItems: 'center',
  },
  infoMessage: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.black,
    marginVertical: 2,
    alignItems: 'center',
  },
});

export default StoreDetailHomeScreen;
