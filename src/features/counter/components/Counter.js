import { Button, StyleSheet, Text, View } from 'react-native';

export const Counter = ({ value, onIncPress, onDecPress }) => {
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <View style={styles.buttonsContainer}>
        <Button title={'++'} onPress={onIncPress} />
        <Button title={'--'} onPress={onDecPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
