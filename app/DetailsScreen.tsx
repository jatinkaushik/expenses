// DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, useRouter } from "expo-router";
import { useTheme } from 'react-native-paper';
import ScreenContainer from '../src/components/ui/ScreenContainer';

function DetailsScreen() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <ScreenContainer>
      <Text>Details Screen</Text>
      <Button
          title="Go to Home"
          onPress={() => router.back()}
      />
    </ScreenContainer>
  );
}

export default DetailsScreen;
