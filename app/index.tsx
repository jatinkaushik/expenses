import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Page from '../src/components/ui/page';
import { useTheme } from 'react-native-paper';
import ScreenContainer from '../src/components/ui/ScreenContainer';


export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <Text style={{ color: theme.colors.primary }}>Hello</Text>
      <Link
        href="/DetailsScreen"
        style={{ textAlign: 'center', marginBottom: 18, fontSize: 24, color: theme.colors.primary }}
      >
        Go to Details Page
      </Link>
      <Page />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
