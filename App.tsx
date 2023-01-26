import { StyleSheet, View } from 'react-native';
import { NewAccount } from './src/screens/anonymous/newAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from './src/screens/anonymous/login';
import { ForgotPassword } from './src/screens/anonymous/forgotPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator 
            initialRouteName='newAccount' 
            screenOptions={{ headerShown: false, animation: 'fade' }}
          >
            <Stack.Screen 
              name="newAccount" 
              component={ NewAccount } 
            />

            <Stack.Screen 
              name="login" 
              component={ Login } 
            />

            <Stack.Screen 
              name="forgotPassword"
              component={ ForgotPassword }
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
