import React, { useCallback, useEffect } from 'react';
import { ListRenderItem, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import {
  ProductTopTabNavigation,
  ProductTopTabParamProps,
} from '@/navigations/tab/product';
import { File } from '@/domain/file';
import StoreProductDescriptionItem from '@/screens/store/product/components/StoreProductDescriptionItem';
import { GET_PRODUCT } from '@/operations/product/query/GetProduct';
import { Colors } from '@/constants/color';
import Animated from 'react-native-reanimated';
import { productDetailHeaderHeightVar } from '@/stores/product';

export const StoreProductDescriptionScreenOptions: MaterialTopTabNavigationOptions =
  {
    title: '상품 설명',
  };

interface StoreProductDescriptionScreenProps {
  route: ProductTopTabParamProps<ProductTopTabNavigation.Description>['route'];
}

const StoreProductDescriptionScreen: React.FC<
  StoreProductDescriptionScreenProps
> = ({ route }) => {
  const [getProduct, { data }] = GET_PRODUCT({
    fetchPolicy: 'cache-only',
    variables: {
      productId: route.params.productId,
    },
  });

  useEffect(() => {
    getProduct();
  }, []);

  const keyExtractor = useCallback((item: File) => item.id, []);

  const renderItem = useCallback<ListRenderItem<File>>(
    ({ item }) => <StoreProductDescriptionItem description={item} />,
    []
  );

  const handleOnScrollEndDrag = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      productDetailHeaderHeightVar(1);
    }
  }, []);

  const handleOnScrollBeginDrag = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y >= 0) {
      productDetailHeaderHeightVar(0);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Animated.FlatList
        style={styles.container}
        data={data?.product?.description ?? []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onScrollEndDrag={handleOnScrollEndDrag}
        onScrollBeginDrag={handleOnScrollBeginDrag}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
  },
});

export default StoreProductDescriptionScreen;
