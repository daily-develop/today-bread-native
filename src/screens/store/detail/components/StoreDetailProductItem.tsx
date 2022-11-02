import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Product } from '@/domain/product';
import CustomImage from '@/components/CustomImage';
import SizedBox from '@/components/SizedBox';
import { Colors } from '@/constants/color';

interface StoreDetailProductItemProps {
  product: Product;
}

const StoreDetailProductItem: React.FC<StoreDetailProductItemProps> = ({
  product,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <CustomImage
        style={styles.image}
        imageUrl={product.image?.url ?? undefined}
        width={120}
        height={120}
      />

      <SizedBox height={16} />

      <Text style={styles.name}>{product.name}</Text>

      <SizedBox height={2} />

      <Text style={styles.price}>{product.price.toLocaleString()} 원</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 6,
  },
  name: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.darkGray,
  },
  price: {
    fontWeight: '500',
    fontSize: 14,
    color: Colors.black,
  },
});

export default StoreDetailProductItem;
