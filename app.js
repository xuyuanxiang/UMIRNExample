import {TransitionPresets} from 'umi';
import {Linking, Platform} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from './components/Loading';

export function getReactNavigationDefaultScreenOptions() {
  /**
   * 查看 screenOptions 全字段：https://reactnavigation.org/docs/stack-navigator/#options
   *
   * 页面转场动画相关设置，可选值：
   * - ScaleFromCenterAndroid: Standard Android navigation transition when opening or closing an Activity on Android 10 (Q).
   * - RevealFromBottomAndroid: Standard Android navigation transition when opening or closing an Activity on Android 9 (Pie).
   * - FadeFromBottomAndroid: Standard Android navigation transition when opening or closing an Activity on Android < 9 (Oreo).
   * - SlideFromRightIOS: Standard iOS navigation transition
   * - ModalSlideFromBottomIOS: Standard iOS navigation transition for modals.
   * - ModalPresentationIOS: Standard iOS modal presentation style (introduced in iOS 13).
   * 根据当前平台（iOS/Android）自动探测：
   * - DefaultTransition: Default navigation transition for the current platform.
   * - ModalTransition: Default modal transition for the current platform.
   */

  // 统一 iOS/Android 页面动画为从右侧滑入
  // return {
  //   ...TransitionPresets.SlideFromRightIOS,
  // };

  // 也可以返回一个 thunk 函数
  return ({route}) => {
    // 单独为某个路由设置：
    if (route.name === '/login') {
      // 为 /pages/login.js 页面设置为从底部滑入
      return Platform.select({
        ios: {
          ...TransitionPresets.ModalPresentationIOS,
        },
        android: {
          ...TransitionPresets.ScaleFromCenterAndroid,
        },
      });
    }
    // 其余页面从右侧滑入
    return {...TransitionPresets.SlideFromRightIOS};
  };
}

const persistConfig = {
  timeout: 2000, // you can define your time. But is required.
  key: 'com.github.xuyuanxiang.UMIRNExample.STATE',
  storage: AsyncStorage,
};

const persistEnhancer = () => (createStore) => (
  reducer,
  initialState,
  enhancer,
) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    enhancer,
  );
  const persist = persistStore(store, null);
  return {
    persist,
    ...store,
  };
};

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
  },
};

const PERSISTENCE_KEY = 'com.github.xuyuanxiang.UMIRNExample.NAVIGATION_STATE';

// 返回之前本地持久化保存的状态，通常用于需要复苏应用、状态恢复的场景。
export async function getReactNavigationInitialState() {
  try {
    const initialUrl = await Linking.getInitialURL();
    if (Platform.OS !== 'web' && initialUrl == null) {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      if (savedStateString) {
        return JSON.parse(savedStateString);
      }
    }
  } catch (ignored) {}
}

// 自定义返回初始状态过程中显示的Loading，只有实现了 getReactNavigationInitialState 才会生效。
export function getReactNavigationInitialIndicator() {
  return Loading;
}

// 订阅 react-navigation 状态变化通知，每次路由变化时，将导航状态持久化保存到手机本地。
export async function onReactNavigationStateChange(state) {
  if (state) {
    await AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  }
}
