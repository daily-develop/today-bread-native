import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { mainBottomNavigationVisibleVar } from '@/stores/common';

import { GET_MANAGED_STORE } from '@/operations/store/query/GetManagedStore';
import { Store } from '@/domain/store';
import ProfileHomeHeader from '@/screens/profile/component/header/ProfileHomeHeader';
import ManagedStoreItem from '@/screens/profile/component/ManagedStoreItem';
import ProfileHomeMenu from '@/screens/profile/component/ProfileHomeMenu';

export const ProfileHomeScreenOptions: StackNavigationOptions = {
  header: () => <ProfileHomeHeader />,
};

interface ProfileHomeScreenProps {}

const ProfileHomeScreen: React.FC<ProfileHomeScreenProps> = () => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  const [getManagedStore, { data, fetchMore }] = GET_MANAGED_STORE();

  useEffect(() => {
    getManagedStore({
      variables: {
        page: 1,
        take: 10,
      },
    });
  }, []);

  const keyExtractor = useCallback((item: Store) => item.id, []);

  const renderItem = useCallback<ListRenderItem<Store>>(
    ({ item }) => <ManagedStoreItem store={item} />,
    []
  );

  const listHeaderComponent = useCallback(() => <ProfileHomeMenu />, []);

  const onEndReached = useCallback(() => {
    if (data?.managedStore.length % 10 === 0) {
      fetchMore({
        variables: {
          page: data?.managedStore.length / 10 + 1,
          take: 10,
        },
      });
    }
  }, [data?.managedStore.length]);

  return (
    <FlatList<Store>
      contentContainerStyle={styles.container}
      data={data?.managedStore ?? []}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={listHeaderComponent}
      onEndReachedThreshold={10}
      onEndReached={onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ProfileHomeScreen;
