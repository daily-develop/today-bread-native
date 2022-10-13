import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import * as MediaLibrary from 'expo-media-library';
import { PhotoIcon } from 'react-native-heroicons/mini';

import { Colors } from '@/constants/color';
import CustomInput from '@/components/CustomInput';
import SizedBox from '@/components/SizedBox';
import Conditional from '@/hocs/Conditional';
import CustomButton from '@/components/CustomButton';
import MultiImageSelectorModal from '@/components/modal/multi-image-selector/MultiImageSelectorModal';
import { mainBottomNavigationVisibleVar } from '@/stores/common';

export const CreateStoreScreenOptions: StackNavigationOptions = {
  headerTitle: '가게 등록',
  headerTitleStyle: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.primary,
  },
};

interface CreateStoreScreenProps {}

const CreateStoreScreen: React.FC<CreateStoreScreenProps> = ({}) => {
  useFocusEffect(() => {
    mainBottomNavigationVisibleVar(false);
  });

  const [nickname, setNickname] = useState<string>('');
  const [storeName, setStoreName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
  const [cycle, setCycle] = useState<string>('');

  const imageKeyExtractor = useCallback(
    (item: MediaLibrary.Asset) => item.id,
    []
  );

  const renderImage = useCallback<ListRenderItem<MediaLibrary.Asset>>(
    ({ item }) => <Image style={styles.image} source={{ uri: item.uri }} />,
    []
  );

  const listFooterComponent = useCallback(
    () => (
      <MultiImageSelectorModal assets={assets} setAssets={setAssets}>
        <View style={styles.imageFooterContainer}>
          <PhotoIcon size={26} color={Colors.darkGray} />
        </View>
      </MultiImageSelectorModal>
    ),
    [assets, setAssets]
  );

  const handleButtonOnPress = useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <CustomInput
          title="사장님 닉네임"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={nickname}
          setText={setNickname}
        />

        <SizedBox height={26} />

        <CustomInput
          title="가게 이름"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={storeName}
          setText={setStoreName}
        />

        <SizedBox height={26} />

        <CustomInput
          title="가게 위치"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={address}
          setText={setAddress}
        />

        <SizedBox height={26} />

        <CustomInput
          title="가게 전화번호"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={phone}
          setText={setPhone}
        />

        <SizedBox height={26} />

        <CustomInput
          title="가게 소개"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={description}
          setText={setDescription}
        />

        <SizedBox height={26} />

        <Text style={styles.title}>가게 사진</Text>
        <SizedBox height={10} />

        <Conditional condition={assets.length === 0}>
          <MultiImageSelectorModal assets={assets} setAssets={setAssets}>
            <View style={styles.unSelectedImageContainer}>
              <PhotoIcon size={26} color={Colors.darkGray} />
            </View>
          </MultiImageSelectorModal>
        </Conditional>

        <Conditional condition={assets.length > 0}>
          <FlatList
            data={assets}
            keyExtractor={imageKeyExtractor}
            renderItem={renderImage}
            ListFooterComponent={listFooterComponent}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </Conditional>

        <SizedBox height={26} />

        <CustomInput
          title="배송 주기"
          titleStyle={styles.title}
          inputStyle={styles.input}
          text={cycle}
          setText={setCycle}
        />

        <SizedBox height={40} />

        <CustomButton label="완료" onPress={handleButtonOnPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 17,
    color: Colors.black,
  },
  input: {
    fontWeight: '400',
    fontSize: 17,
    color: Colors.black,
    paddingLeft: 4,
    borderBottomWidth: 1,
  },
  unSelectedImageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 6,
    marginLeft: 10,
  },
  imageFooterContainer: {
    width: 140,
    height: 140,
    borderRadius: 6,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
});

export default CreateStoreScreen;
