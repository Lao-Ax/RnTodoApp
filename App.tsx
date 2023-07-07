import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LearnReact } from './src/features/app/components/LearnReact';
import CounterContainer from './src/features/counter/components/CounterContainer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CounterContainer />
      <LearnReact isDarkMode={isDarkMode} backgroundStyle={backgroundStyle} />
    </SafeAreaView>
  );
}

export default App;
