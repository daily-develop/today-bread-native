import React, { useMemo } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { GET_ME } from '@/operations/profile/query/GetMe';
import Conditional from '@/hocs/Conditional';
import { Colors } from '@/constants/color';
import { Profile } from '@/domain/profile';
import WhiteBreadIcon from '@/components/icons/WhiteBreadIcon';

const ProfileHomeHeader: React.FC = () => {
  const { data } = GET_ME();

  const me = useMemo<Profile>(() => data?.me, [data]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{me?.name ?? ''}</Text>
          <Text style={styles.address}>{me?.address ?? ''}</Text>
        </View>

        <Conditional condition={me?.profileImageUrl === null}>
          <Image
            style={styles.profileImage}
            source={{ uri: me?.profileImageUrl }}
            resizeMode="cover"
          />
        </Conditional>

        <Conditional condition={me?.profileImageUrl !== null}>
          <View style={[styles.profileImage, styles.emptyProfileImage]}>
            <WhiteBreadIcon size={32} />
          </View>
        </Conditional>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.primary,
  },
  address: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.black,
    marginTop: 6,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 100,
  },
  emptyProfileImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
  },
});

export default ProfileHomeHeader;
