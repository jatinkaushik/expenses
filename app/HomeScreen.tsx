import React from 'react';
import { Text, View } from 'react-native';
import ScreenContainer from '../src/components/ui/ScreenContainer';
import { Button } from "../src/components/ui/forms/buttons"
import { Input } from "../src/components/ui/forms/input"

interface HomeScreenProps {
  theme: any
}

const HomeScreen: React.FC<HomeScreenProps> = ({ theme }) => {
  return (
    <ScreenContainer>
      <View>
        <Text style={{ color: theme?.colors.primary }}>Home Screen</Text>
        <Button />
        <Input />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
