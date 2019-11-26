import React, {useState, useEffect} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen =(searchTerm)=>{
  const [term,setTerm]=useState("");
  const [searchApi,results, err]= useResults();

  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
      />
      {err
        ?<Text>{err}</Text>
        :<Text>Number of Restuarants: {results.length}</Text>
      }
    </View>
  );
};

const styles=StyleSheet.create({});

export default SearchScreen;
