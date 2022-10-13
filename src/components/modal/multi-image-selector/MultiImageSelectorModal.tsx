import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import Modal from 'react-native-modal';
import {
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import { Colors } from '@/constants/color';

import MultiImageSelectorModalHeader from '@/components/modal/multi-image-selector/MultiImageSelectorModalHeader';
import MultiImageSelectorModalPreviewHeader from '@/components/modal/multi-image-selector/MultiImageSelectorModalPreviewHeader';
import MultiImageSelectorModalItem from '@/components/modal/multi-image-selector/MultiImageSelectorModalItem';

interface MultiImageSelectorModalProps {
  children: JSX.Element;
  assets: MediaLibrary.Asset[];
  setAssets: React.Dispatch<React.SetStateAction<MediaLibrary.Asset[]>>;
}

const MultiImageSelectorModal: React.FC<MultiImageSelectorModalProps> = ({
  children,
  assets,
  setAssets,
}) => {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const previewHeight = useSharedValue(0);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [selected, setSelected] = useState<MediaLibrary.Asset[]>(assets);
  const [after, setAfter] = useState<string>(null);
  const [hasNext, setHasNext] = useState<boolean>(null);

  const previewHeightValue = useDerivedValue(
    () => previewHeight.value,
    [selected.length]
  );

  useEffect(() => {
    if (!status?.granted) {
      requestPermission();
    }
  }, [status?.granted, requestPermission]);

  useEffect(() => {
    MediaLibrary.getAssetsAsync({
      first: 60,
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: [MediaLibrary.SortBy.creationTime],
    }).then((data) => {
      setPhotos(data.assets);
      setAfter(data.endCursor);
      setHasNext(data.hasNextPage);
    });
  }, [setPhotos]);

  useEffect(() => {
    if (isVisible && assets.length > 0 && assets.length !== selected.length) {
      setAssets(assets);
    }
  }, [isVisible, assets, setSelected]);

  useAnimatedReaction(
    () => selected.length > 0,
    (isVisible) => {
      previewHeight.value = isVisible ? 80 : 0;
    },
    [selected.length]
  );

  const handleOnOpenModal = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handleOnClose = useCallback(() => {
    setIsVisible(false);
    setSelected([]);
  }, [setIsVisible, setSelected]);

  const handleOnComplete = useCallback(async () => {
    setIsVisible(false);

    setAssets(selected);
  }, [setIsVisible, setAssets, selected]);

  const selectImage = useCallback(
    (asset: MediaLibrary.Asset) => {
      setSelected((prev) => {
        if (prev.map((it) => it.uri).includes(asset.uri)) {
          return prev.filter((it) => it.uri !== asset.uri);
        } else {
          return [...prev, asset];
        }
      });
    },
    [setSelected]
  );

  const keyExtractor = useCallback((_, index: number) => `image:${index}`, []);

  const renderItem = useCallback<ListRenderItem<MediaLibrary.Asset>>(
    ({ item }) => (
      <MultiImageSelectorModalItem
        asset={item}
        sequence={selected.indexOf(item)}
        select={selectImage}
      />
    ),
    [selected, selectImage]
  );

  const listHeaderComponent = useCallback(
    () => (
      <MultiImageSelectorModalPreviewHeader
        height={previewHeightValue}
        assets={selected}
        select={selectImage}
      />
    ),
    [selected, selectImage]
  );

  const handleOnEndReach = useCallback(() => {
    if (!hasNext) return;
    MediaLibrary.getAssetsAsync({
      first: 60,
      after,
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: [MediaLibrary.SortBy.creationTime],
    }).then((data) => {
      setPhotos((prev) => [...prev, ...data.assets]);
      setAfter(data.endCursor);
      setHasNext(data.hasNextPage);
    });
  }, [after, hasNext, setPhotos]);

  return (
    <>
      <TouchableOpacity onPress={handleOnOpenModal} activeOpacity={0.65}>
        {children}
      </TouchableOpacity>

      <Modal
        style={styles.modalContainer}
        isVisible={isVisible}
        onBackdropPress={handleOnClose}
        onBackButtonPress={handleOnClose}
      >
        <SafeAreaView style={styles.safeContainer}>
          <MultiImageSelectorModalHeader
            selected={selected.length}
            onClose={handleOnClose}
            onComplete={handleOnComplete}
          />

          <FlatList<MediaLibrary.Asset>
            columnWrapperStyle={styles.container}
            data={photos}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListHeaderComponent={listHeaderComponent}
            onEndReached={handleOnEndReach}
            onEndReachedThreshold={1}
            stickyHeaderIndices={[0]}
            numColumns={3}
            initialNumToRender={60}
            maxToRenderPerBatch={30}
            updateCellsBatchingPeriod={30}
            windowSize={3}
            removeClippedSubviews
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    justifyContent: 'space-between',
  },
});

export default MultiImageSelectorModal;
