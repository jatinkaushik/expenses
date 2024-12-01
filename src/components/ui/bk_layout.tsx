import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme, StyleSheet} from 'react-native';
import { Stack, Tabs } from 'expo-router';
import { LightScheme } from '../src/theme/lightScheme';
import { DarkScheme } from '../src/theme/darkScheme';

const LightTheme = {
  ...DefaultTheme,
  colors: LightScheme,
};

const DarkTheme = {
  ...DefaultTheme,
  colors: DarkScheme,
};

export default function Layout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
  });

  return (
    <PaperProvider theme={theme}>
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.background },
                headerTintColor: theme.colors.primary,
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitleVisible: false,
                contentStyle:styles.container
            }}
        >
            <Stack.Screen
              name="index"
              options={{
                  title: 'HomeScreen',
                  header: () => null, // Customize as needed
              }}
            />
            <Stack.Screen
              name="DetailsScreen"
              options={{ title: 'Detail Screen' }}
            />
            <Stack.Screen
              name="HomeScreen"
              options={{ title: 'Home Screen', presentation: "modal" }}
            />
        </Stack>
        <Tabs>
          <Tabs.Screen name="index" options={{ title: "Home" }} />
          <Tabs.Screen name="DetailsScreen" options={{ title: "Page1" }} />
          <Tabs.Screen name="HomeScreen" options={{ title: "Page2" }} />
        </Tabs>
    </PaperProvider>
  );
}
