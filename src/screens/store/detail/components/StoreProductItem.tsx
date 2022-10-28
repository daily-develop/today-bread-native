import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Product } from '@/domain/product';
import CustomImage from '@/components/CustomImage';
import SizedBox from '@/components/SizedBox';
import { Colors } from '@/constants/color';

interface StoreProductItemProps {
  product: Product;
}

const StoreProductItem: React.FC<StoreProductItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <CustomImage
        style={styles.image}
        imageUrl={product.image?.url}
        width={100}
        height={100}
      />

      <SizedBox width={18} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.name}</Text>

        <SizedBox height={10} />

        <Text style={styles.text}>{product.description}</Text>

        <SizedBox height={6} />

        <Text style={styles.text}>{product.price.toLocaleString()} 원</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  image: {
    borderRadius: 5,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.black,
  },
  text: {
    fontWeight: '300',
    fontSize: 14,
    color: Colors.black,
    paddingLeft: 6,
  },
});

export default StoreProductItem;
