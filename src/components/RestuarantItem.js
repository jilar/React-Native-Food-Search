import React from 'react';
import {View,Text,StyleSheet, Image} from 'react-native'

const RestuarantItem =({restuarant}) =>{
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:restuarant.image_url}}/>
      <Text style= {styles.name}>{restuarant.name}</Text>
      <Text>{restuarant.rating} Stars, {restuarant.review_count} Reviews</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    marginLeft:10,
    marginBottom:5
  },
  image:{
    width:250,
    height:120,
    borderRadius: 4
  },
  name:{
    fontWeight: 'bold',
  }
});

export default RestuarantItem;
