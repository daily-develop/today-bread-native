import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Product } from '@/domain/product';
import { Colors } from '@/constants/color';
import CustomImage from '@/components/CustomImage';
import SizedBox from '@/components/SizedBox';
import { Entypo } from '@expo/vector-icons';

interface ProfileSubscribedProductDetailItemProps {
  product: Product;
}

const ProfileSubscribedProductDetailItem: React.FC<
  ProfileSubscribedProductDetailItemProps
> = ({ product }) => {
  return (
    <View style={styles.container}>
      <CustomImage imageUrl={product.image?.url} width={80} height={80} />

      <SizedBox width={10} />

      <View style={styles.flexContainer}>
        <Text style={styles.store}>{product.store.name}</Text>

        <SizedBox height={6} />

        <Text style={styles.product}>{product.name}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.price}>{+product.price.toLocaleString()} 원</Text>

          <View style={styles.reviewContainer}>
            <Text style={styles.review}>리뷰 작성</Text>

            <Entypo
              name="chevron-small-right"
              size={24}
              color={Colors.primary}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  store: {
    fontWeight: '600',
    fontSize: 15,
    color: Colors.black,
  },
  product: {
    fontWeight: '400',
    fontSize: 13,
    color: Colors.darkGray,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: '400',
    fontSize: 13,
    color: Colors.black,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.primary,
  },
});

export default ProfileSubscribedProductDetailItem;
