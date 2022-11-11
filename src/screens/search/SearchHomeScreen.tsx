import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import {
  SearchNavigations,
  SearchStackParamProps,
} from '@/navigations/stack/search';
import { Colors } from '@/constants/color';
import { mainBottomNavigationVisibleVar } from '@/stores/common';
import Conditional from '@/hocs/Conditional';

import SearchHomeHeader from '@/screens/search/components/header/SearchHomeHeader';
import SearchList from '@/screens/search/components/SearchList';

export const SearchHomeScreenOptions: StackNavigationOptions = {
  header: () => <SearchHomeHeader />,
};

interface SearchHomeScreenProps {
  route: SearchStackParamProps<SearchNavigations.Home>['route'];
}

const SearchHomeScreen: React.FC<SearchHomeScreenProps> = ({ route }) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(true);
  });

  const search = useMemo<string>(
    () => route.params?.search ?? '',
    [route.params?.search]
  );

  return (
    <View style={styles.container}>
      <Conditional condition={search.trim().length === 0}>
        <View style={styles.emptySearchContainer}>
          <Text style={styles.emptySearchTitle}>
            어떤{' '}
            <Text style={[styles.emptySearchTitle, styles.primaryColor]}>
              베이커리
            </Text>
            를 찾고 계신가요?
          </Text>
        </View>
      </Conditional>

      <Conditional condition={search.trim().length !== 0}>
        <SearchList search={search} />
      </Conditional>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptySearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptySearchTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.black,
  },
  primaryColor: {
    color: Colors.primary,
  },
});

export default SearchHomeScreen;
