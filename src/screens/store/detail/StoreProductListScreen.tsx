import React, { useCallback, useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import {
  StoreDetailNavigations,
  StoreDetailStackParamProps,
} from '@/navigations/stack/store';

import { mainBottomNavigationVisibleVar } from '@/stores/common';
import { GET_PRODUCTS } from '@/operations/product/query/GetProducts';
import { Product } from '@/domain/product';
import StoreProductItem from '@/screens/store/detail/components/StoreProductItem';

export const StoreProductListScreenOptions: StackNavigationOptions = {
  title: '판매 중인 패키지',
};

interface StoreProductListScreenProps {
  route: StoreDetailStackParamProps<StoreDetailNavigations.ProductList>['route'];
}

const StoreProductListScreen: React.FC<StoreProductListScreenProps> = ({
  route,
}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(false);
  });

  const [getProducts, { data }] = GET_PRODUCTS({
    variables: { storeId: route.params.storeId },
  });

  useEffect(() => {
    getProducts();
  }, []);

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => <StoreProductItem product={item} />,
    []
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList<Product>
        style={styles.container}
        data={data?.products ?? []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    paddingBottom: 20,
  },
});

export default StoreProductListScreen;
