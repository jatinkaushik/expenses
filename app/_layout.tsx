import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme, View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { LightScheme } from '../src/theme/lightScheme';
import { DarkScheme } from '../src/theme/darkScheme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MiddlewareWrapper from '../src/components/ui/MiddlewareWrapper';




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

  return (
    <PaperProvider theme={theme}>
      <MiddlewareWrapper>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <Tabs
            screenOptions={{
              headerStyle: { backgroundColor: theme.colors.background },
              headerTintColor: theme.colors.primary,
              headerTitleStyle: { fontWeight: 'bold' },
              tabBarStyle: { backgroundColor: theme.colors.background },
              tabBarLabelStyle: { color: theme.colors.primary },
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: "grey"
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="DetailsScreen"
              options={{
                title: "Details",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="lock" size={size} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="HomeScreen"
              options={{
                title: "Home Page",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="info-circle" size={size} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="test/index"
              options={{
                title: "Test Page",
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="settings" size={size} color={color} />
                ),
              }}
            />
          </Tabs>
        </View>
      </MiddlewareWrapper>
    </PaperProvider>
  );
}