import React from 'react';
import { Text } from 'react-native';

const TodoDetails = ({ todo }) => {
  const { text, completed } = todo;
  return (
    <Text>
      This is todo details.
      {`\n`}You {completed ? 'have done: ' : `are going to do: `}{text}.
      {`\n`}Tap the buttons just fo fun.
    </Text>
  );
};

export default TodoDetails;
