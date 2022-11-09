import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

import { mainBottomNavigationVisibleVar } from '@/stores/common';
import { Product } from '@/domain/product';
import { GET_PRODUCTS } from '@/operations/product/query/GetProducts';
import ProductItem from '@/components/product/ProductItem';
import {
  StoreDetailNavigations,
  StoreNavigations,
  StoreStackParamProps,
} from '@/navigations/stack/store';

export const StoreHomeScreenOptions: StackNavigationOptions = {
  headerTitle: '패키지 리스트',
  headerTitleAlign: 'left',
};

interface StoreHomeScreenProps {
  navigation: StoreStackParamProps<StoreNavigations.Home>['navigation'];
}

const StoreHomeScreen: React.FC<StoreHomeScreenProps> = ({ navigation }) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  const [getProducts, { data, fetchMore }] = GET_PRODUCTS({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    getProducts({
      variables: {
        page: 1,
        take: 10,
      },
    });
  }, []);

  const handleOnItemPress = useCallback(
    (product: Product) => {
      return () => {
        navigation.dispatch(
          CommonActions.navigate(StoreNavigations.Detail, {
            initial: true,
            screen: StoreDetailNavigations.Product,
            params: {
              productId: product.id,
            },
          })
        );
      };
    },
    [navigation]
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => (
      <ProductItem product={item} onPress={handleOnItemPress(item)} />
    ),
    [handleOnItemPress]
  );

  const onEndReached = useCallback(() => {
    if (data?.products.length % 10 == 0) {
      fetchMore({
        variables: {
          page: (data?.products.length % 10) + 1,
          take: 10,
        },
      });
    }
  }, [data?.products.length]);

  return (
    <FlatList<Product>
      data={data?.products ?? []}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={10}
      onEndReached={onEndReached}
    />
  );
};

export default StoreHomeScreen;
