import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>


const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button title="Go to Details" onPress={()=>navigation.navigate('Details',{productId:'hey'})}/>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    smallText:{
        color:'#0000',
    },
});
export default Home;
