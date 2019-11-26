import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native'
import{ Feather } from '@expo/vector-icons';

const SearchBar =({term,onTermChange,onTermSubmit}) =>{
  return(
    <View style={styles.backGround}>
      <Feather style={styles.iconStyle} name ='search'/>
      <TextInput
        autoCapitalize="none"
        style={styles.inputStyle}
        placeholder= 'Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  backGround:{
    backgroundColor:'#F0EEEE',
    height: 50,
    borderRadius:5,
    marginHorizontal:15,
    marginTop:10,
    flexDirection:'row'
  },
  inputStyle:{
    flex:1,
    fontSize:18
  },
  iconStyle:{
    fontSize:35,
    alignSelf: 'center',
    marginHorizontal:15
  }
});

export default SearchBar;
