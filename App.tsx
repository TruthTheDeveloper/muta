import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform, View} from 'react-native';
import {useIgnore} from './src/hooks/useIgnore';
import NavigationProvider from './src/routers/navigation';
import {ToastProvider} from './src/presenters/h-toast';
import {Host} from 'react-native-portalize';
import Toast from 'react-native-toast-message';

import SplashScreen from 'react-native-splash-screen';


const App = () => {
  const ignore = useIgnore();


  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Host>
        <Toast />
          <ToastProvider>
            <NavigationProvider />
          </ToastProvider>
        </Host>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
