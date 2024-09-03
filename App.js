// In App.js in a new project

import * as React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import{useNavigation} from '@react-navigation/native';

import MainScreen from './src/screens/MainScreen';
// import RecipeListScreen from './src/screens/RecipeListScreen';
// import ScanRecipeScreen from './src/screens/ScanRecipeScreen';
// import SavedRecipesScreen from './src/screens/SavedRecipesScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          headerShown:false,//untuk menutup header
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
//         <Text>Go to Detail Screen</Text>
//       </TouchableOpacity>
//       <Text>Home --👍✨😊</Text>
//     </View>
//   );
// }

// function DetailScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
//     <Text>Go to Account Screen</Text>
//     </TouchableOpacity>
//     </View>
//   );
// }

// function AccountScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Account Screen✨😎🙌</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//         <Stack.Screen name="Account" component={AccountScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default App;