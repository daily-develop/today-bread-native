import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

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

  return (
    <Conditional condition={!loading}>
      <View style={styles.container}>
        {stores.map((store) => (
          <ManagedStoreItem key={store.id} store={store} />
        ))}
      </View>
    </Conditional>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ManagedStoreList;
