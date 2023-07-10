import { Text, View } from 'react-native';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <View>
      <Text>
        Remaining Todos: {count} item{suffix} left
      </Text>
    </View>
  );
};

export default RemainingTodos;
