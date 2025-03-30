import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import type {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';


type DetailsProps=NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}:DetailsProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details : {productId}</Text>
      {/* <Button title="Go back" onPress={()=> navigation.goBack()} /> */}
      <Button title="Go back" onPress={()=> navigation.popToTop()} />
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

export default Details;
