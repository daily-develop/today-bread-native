import React, { useCallback, useMemo } from 'react';
import { Linking, SafeAreaView, StyleSheet } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

import {
  StoreDetailNavigations,
  StoreDetailStackParamProps,
} from '@/navigations/stack/store';
import { BASE_URL } from '@/constants';

export const StoreProductSubscribeScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

interface StoreProductSubscribeScreenProps {
  navigation: StoreDetailStackParamProps<StoreDetailNavigations.Subscribe>['navigation'];
  route: StoreDetailStackParamProps<StoreDetailNavigations.Subscribe>['route'];
}

const REDIRECT_URI: string = `${BASE_URL}/api/order/redirect`;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('')`;

const StoreProductSubscribeScreen: React.FC<
  StoreProductSubscribeScreenProps
> = ({ navigation, route }) => {
  const source = useMemo<{ uri: string; headers: { [key: string]: string } }>(
    () => ({
      uri: `${route.params.orderUrl}?successUrl=${REDIRECT_URI}`,
      headers: {
        'Secret-Token': route.params.orderSecret,
      },
    }),
    [route.params]
  );

  const handleOnMessage = useCallback(
    (event: WebViewMessageEvent) => {
      if (event.nativeEvent.url.startsWith(REDIRECT_URI)) {
        navigation.goBack();
      }
    },
    [navigation]
  );

  const handleOnShouldStartLoadWithRequest = useCallback(
    (request: ShouldStartLoadRequest) => {
      if (request.url.startsWith('kakaotalk://')) {
        Linking.openURL(request.url)
          .then(() => {
            console.debug('[DeepLinking] open kakaotalk');
          })
          .catch(() => {
            console.debug('[DeepLinking] failed');
          });
        return false;
      }

      return true;
    },
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={source}
        onMessage={handleOnMessage}
        onShouldStartLoadWithRequest={handleOnShouldStartLoadWithRequest}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        bounces={false}
        javaScriptEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StoreProductSubscribeScreen;
