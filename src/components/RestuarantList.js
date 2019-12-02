import React from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native'
import RestuarantItem from '../components/RestuarantItem';

const RestuarantList =(props) =>{
  //<RestuarantItem restuarant={item}/>
  return(
    <View style={styles.container}>
      <Text style= {styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={result => result.id}
        renderItem={({item})=>{
          return <RestuarantItem restuarant={item}/>
        }}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:5
  },
  container:{
    marginBottom:10
  }
});

export default RestuarantList;
