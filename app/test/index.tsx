// HomeScreen.js
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import ScreenContainer from '../../src/components/ui/ScreenContainer';

function TestScreen() {
    const theme = useTheme();
    const router = useRouter();
    const styles = StyleSheet.create({
        text: {
          color: theme.colors.primary
        },
    });
    return (
        <ScreenContainer>
            <Text style={styles.text}>Test Screen</Text>
            <Button
                title="Go to Details"
                onPress={() =>  router.navigate('DetailsScreen')}
            />
        </ScreenContainer>
    );
}

export default TestScreen;
