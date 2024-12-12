import React from 'react';
import { View, Text, Button } from 'react-native';

interface ComponentAProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const ComponentA: React.FC<ComponentAProps> = ({ text, setText }) => {
  const handleClick = () => {
    setText("Text A Changed!");
  };

  return (
    <View>
      <Text>{text}</Text>
      <Button title="Change Text A" onPress={handleClick} />
    </View>
  );
};

export default ComponentA;