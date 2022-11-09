import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import _ from 'lodash';

import { Colors } from '@/constants/color';
import { mainBottomNavigationVisibleVar } from '@/stores/common';
import { BreadType } from '@/domain/product';

import BreadIcon from '@/components/icons/BreadIcon';
import CookiesIcon from '@/components/icons/CookiesIcon';
import DonutsIcon from '@/components/icons/DonutsIcon';
import CakesIcon from '@/components/icons/CakesIcon';
import TartsIcon from '@/components/icons/TartsIcon';
import CroissantsIcon from '@/components/icons/CroissantsIcon';
import PastriesIcon from '@/components/icons/PastriesIcon';
import SandwichesIcon from '@/components/icons/SandwichesIcon';
import PetitFourIcon from '@/components/icons/PetitFourIcon';
import SizedBox from '@/components/SizedBox';

export const HomeScreenOptions: StackNavigationOptions = {
  title: '오늘의 빵',
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.primary,
  },
  headerStyle: {
    elevation: 1,
  },
};

const categoryList: { key: BreadType; icon: JSX.Element; name: string }[] = [
  {
    key: BreadType.BREAD,
    icon: <BreadIcon size={48} />,
    name: '식빵',
  },
  {
    key: BreadType.COOKIES,
    icon: <CookiesIcon size={48} />,
    name: '쿠키',
  },
  {
    key: BreadType.DONUTS,
    icon: <DonutsIcon size={48} />,
    name: '도넛',
  },
  {
    key: BreadType.CAKES,
    icon: <CakesIcon size={48} />,
    name: '케이크',
  },
  {
    key: BreadType.TARTS,
    icon: <TartsIcon size={48} />,
    name: '타르트',
  },
  {
    key: BreadType.CROISSANTS,
    icon: <CroissantsIcon size={48} />,
    name: '크로와상',
  },
  {
    key: BreadType.PASTRIES,
    icon: <PastriesIcon size={48} />,
    name: '페스츄리',
  },
  {
    key: BreadType.SANDWICHES,
    icon: <SandwichesIcon size={48} />,
    name: '샌드위치',
  },
  {
    key: BreadType.PETIT_FOUR,
    icon: <PetitFourIcon size={48} />,
    name: '구움과자',
  },
  {
    key: BreadType.ETC,
    icon: (
      <Entypo name="dots-three-horizontal" size={48} color={Colors.primary} />
    ),
    name: '기타',
  },
  {
    key: null,
    icon: null,
    name: null,
  },
  {
    key: null,
    icon: null,
    name: null,
  },
];

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.categoryContainer}>
        {_(categoryList)
          .chunk(4)
          .value()
          .map((row, rowIndex) => (
            <View key={rowIndex.toString()} style={styles.categoryRowContainer}>
              {row.map((category, index) => (
                <TouchableOpacity
                  key={category.key ?? index.toString()}
                  style={styles.categoryItemContainer}
                  activeOpacity={0.8}
                  disabled={category.key === null}
                >
                  {category.icon ?? <SizedBox width={48} height={48} />}

                  <SizedBox height={12} />

                  <Text style={styles.category}>{category.name ?? ''}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItemContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.black,
  },
});

export default HomeScreen;
