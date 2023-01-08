import { StyleSheet, View } from 'react-native';
import { NewAccount } from './src/screens/anonymous/newAccount';

export default function App() {
  return (
    <View style={styles.container}>
      <NewAccount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    alignSelf: 'stretch'
  },
  pageTitle: {
    marginTop: 0
  }
});
