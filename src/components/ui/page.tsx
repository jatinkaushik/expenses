import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from 'react-native-paper';


export default function Page() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    text: {
      color: theme.colors.primary
    },
  });

  return (
    <View>
        <Text style={styles.text}>
            Hello Page
        </Text>
    </View>
  );
}
