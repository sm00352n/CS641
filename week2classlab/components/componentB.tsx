import React from 'react';
import { View, Text, Button } from 'react-native';

interface ComponentBProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const ComponentB: React.FC<ComponentBProps> = ({ text, setText }) => {
  const handleClick = () => {
    setText("Text B Changed!");
  };

  return (
    <View>
      <Text>{text}</Text>
      <Button title="Change Text B" onPress={handleClick} />
    </View>
  );
};

export default ComponentB;