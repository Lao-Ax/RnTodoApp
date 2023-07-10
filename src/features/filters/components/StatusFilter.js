import { statuses } from '../filterSlice';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(statuses).map((key) => {
    const value = statuses[key];
    const handlePress = () => onChange(value);
    const selected = value === status;

    return (
      <Pressable
        key={value}
        onPress={handlePress}
        style={selected ? styles.selected : null}>
        <Text>{key}</Text>
      </Pressable>
    );
  });

  return (
    <View style={styles.container}>
      <Text>Filter by Status</Text>
      <View style={styles.statusContainer}>{renderedFilters}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
      alignItems: 'flex-end'
  },
  statusContainer: {
    paddingLeft: '10%',
    backgroundColor: 'white',
  },
  selected: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: 'lightpink'
  },
});

export default StatusFilter;
