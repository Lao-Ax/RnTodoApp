import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CounterContainer from './src/features/counter/components/CounterContainer';
import TodoList from './src/features/todos/components/TodoList';
import Header from './src/features/todos/components/Header';
import { todoAdded } from './src/features/todos/actions';
import Footer from './src/features/filters/components/Footer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CounterContainer />
      <Header onSubmit={todoAdded} />
      <TodoList />
      <Footer />
      {/*<LearnReact isDarkMode={isDarkMode} backgroundStyle={backgroundStyle} />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
