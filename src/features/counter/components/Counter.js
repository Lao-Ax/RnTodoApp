import { Button, Text, View } from 'react-native';

const styles = {
  view: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const Counter = ({ value, onPress }) => {
  return (
    <View style={styles.view}>
      <Text>{value}</Text>
      <Button title={'Press Me'} onPress={onPress} />
    </View>
  );
};
