
import React from 'react';

import Home from './screens/Home';
import Details from './screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList ={
  Home:undefined,
  Details:{productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {


  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home" component={Home} options={{title:'Recent Posts'}}/>
      <Stack.Screen name="Details" component={Details}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}



export default App;
