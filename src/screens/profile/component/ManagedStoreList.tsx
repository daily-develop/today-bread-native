import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import { Store } from '@/domain/store';
import { GET_MANAGED_STORE } from '@/operations/store/query/GetManagedStore';
import Conditional from '@/hocs/Conditional';

import ManagedStoreItem from '@/screens/profile/component/ManagedStoreItem';

const ManagedStoreList: React.FC = () => {
  const [getManagedStore, { data, loading }] = GET_MANAGED_STORE();

  const stores = useMemo<Store[]>(() => data?.managedStore ?? [], [data]);

  useEffect(() => {
    getManagedStore();
  }, []);

  const keyExtractor = useCallback((item: Store) => item.id, []);

  const renderItem = useCallback<ListRenderItem<Store>>(
    ({ item }) => <ManagedStoreItem store={item} />,
    []
  );

  return (
    <Conditional condition={!loading}>
      <FlatList
        style={styles.container}
        data={stores}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </Conditional>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ManagedStoreList;
