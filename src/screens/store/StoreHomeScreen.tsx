import React, { useCallback, useEffect, useState } from 'react';
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
  headerTitle: '패키지 랭킹',
  headerTitleAlign: 'left',
};

interface StoreHomeScreenProps {
  navigation: StoreStackParamProps<StoreNavigations.Home>['navigation'];
}

const StoreHomeScreen: React.FC<StoreHomeScreenProps> = ({ navigation }) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  const [getProducts, { data, fetchMore, refetch }] = GET_PRODUCTS({
    fetchPolicy: 'cache-and-network',
  });

  const [refreshing, setRefreshing] = useState<boolean>(false);

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
    if (data?.products.length % 10 === 0) {
      fetchMore({
        variables: {
          page: Math.floor(data?.products.length / 10) + 1,
          take: 10,
        },
        updateQuery: (prev, { fetchMoreResult }) => ({
          products: [...(prev?.products ?? []), ...fetchMoreResult.products],
        }),
      });
    }
  }, [data?.products.length]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch({
      page: 1,
      take: 10,
    });
    setRefreshing(false);
  }, []);

  return (
    <FlatList<Product>
      data={data?.products ?? []}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={30}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default StoreHomeScreen;
