import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background
    } as ViewStyle,
  });
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default ScreenContainer;
