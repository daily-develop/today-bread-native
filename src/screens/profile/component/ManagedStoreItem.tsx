import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Store } from '@/domain/store';
import { Colors } from '@/constants/color';

interface ManagedStoreItemProps {
  store: Store;
}

const ManagedStoreItem: React.FC<ManagedStoreItemProps> = ({ store }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.storeImage} source={{ uri: store.image.url }} />

        <View style={styles.infoContainer}>
          <Text style={styles.storeName}>{store.name}</Text>
          <Text style={styles.mangerNickname}>{store.manager.nickname}</Text>
        </View>

        <AntDesign name="right" size={22} color={Colors.black} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>패키지</Text>
          <Text style={styles.buttonActionText}>등록</Text>
        </View>

        <View style={[styles.buttonContainer, styles.buttonBorder]}>
          <Text style={styles.buttonText}>패키지</Text>
          <Text style={styles.buttonActionText}>조회</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>패키지</Text>
          <Text style={styles.buttonActionText}>삭제</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  topContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 18,
  },
  storeName: {
    fontWeight: '700',
    fontSize: 22,
    color: Colors.primary,
    marginBottom: 2,
  },
  mangerNickname: {
    fontWeight: '300',
    fontSize: 13,
    color: Colors.black,
    marginTop: 2,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: Colors.lightGray,
    borderRightColor: Colors.lightGray,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.black,
  },
  buttonActionText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.primary,
    marginTop: 10,
  },
});

export default ManagedStoreItem;
