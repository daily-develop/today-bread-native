import React, { useCallback, useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

import { mainBottomNavigationVisibleVar } from '@/stores/common';
import { HomeNavigations, HomeStackParamProps } from '@/navigations/stack/home';
import { GET_STORES } from '@/operations/store/query/GetStores';
import { Store } from '@/domain/store';
import { StoreNavigations } from '@/navigations/stack/store';
import StoreItem from '@/components/store/StoreItem';

export const HomeRecentStoreScreenOptions: StackNavigationOptions = {
  title: '최신 베이커리',
  headerTitleAlign: 'left',
};

interface HomeRecentStoreScreenProps {
  navigation: HomeStackParamProps<HomeNavigations.RecentStore>['navigation'];
}

const HomeRecentStoreScreen: React.FC<HomeRecentStoreScreenProps> = ({
  navigation,
}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(false);
  });

  const [getStores, { data, fetchMore }] = GET_STORES();

  useEffect(() => {
    getStores({
      variables: {
        page: 1,
        take: 10,
      },
    });
  }, []);

  const handleOnPress = useCallback(
    (store: Store) => {
      return () =>
        navigation.dispatch(
          CommonActions.navigate(HomeNavigations.Store, {
            initial: true,
            screen: StoreNavigations.Detail,
            params: {
              storeId: store.id,
            },
          })
        );
    },
    [navigation]
  );

  const keyExtractor = useCallback((item: Store) => item.id, []);

  const renderItem = useCallback<ListRenderItem<Store>>(
    ({ item }) => <StoreItem store={item} onPress={handleOnPress(item)} />,
    [handleOnPress]
  );

  const onEndReached = useCallback(() => {
    if (data?.stores?.length % 10 === 0) {
      fetchMore({
        variables: {
          page: data?.stores?.length / 10 + 1,
          take: 10,
        },
      });
    }
  }, [data?.stores?.length]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data?.stores ?? []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={10}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});

export default HomeRecentStoreScreen;
