import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

export const StoreProductReviewScreenOptions: MaterialTopTabNavigationOptions =
  {
    title: '리뷰',
  };

interface StoreProductReviewScreenProps {}

const StoreProductReviewScreen: React.FC<
  StoreProductReviewScreenProps
> = ({}) => {
  return <></>;
};

const styles = StyleSheet.create({});

export default StoreProductReviewScreen;
