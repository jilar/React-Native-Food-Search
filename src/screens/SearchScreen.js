import React, {useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen =()=>{
  const [term,setTerm]=useState("");
  const [results,setResults]=useState([]);
  const [err,setError]=useState("");

  const searchApi =async ()=>{
    try{
      const response = await yelp.get('/search',{
        params:{
          limit:50,
          term:term,
          location:'san jose'
        }
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    }catch(err){
      setErrorMessage("Something went wrong. Try again later");
    }
  }

  return(
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
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
