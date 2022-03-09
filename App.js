import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeComponent from './src/components/HomeComponent';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red'}}>
    <SafeAreaView style={styles.container}>
    <HomeComponent />
    <StatusBar style="light" />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
