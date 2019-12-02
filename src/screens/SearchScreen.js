import React, {useState} from 'react';
import {View,StyleSheet,Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestuarantList from '../components/RestuarantList';

const SearchScreen =(searchTerm)=>{
  const [term,setTerm]=useState("");
  const [searchApi,results,err]= useResults();

  const filterResultsByPrice=(price)=>{
    return results.filter(result =>{
      return result.price === price;
    });
  }

  return(
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
      />
      {err
        ?<Text>{err}</Text> : null
      }
      <ScrollView>
        <RestuarantList title="Cost Effective" results={filterResultsByPrice("$")} />
        <RestuarantList title="Bit Pricier" results={filterResultsByPrice("$$")}/>
        <RestuarantList title="Big Spender" results={filterResultsByPrice("$$$")}/>
      </ScrollView>
    </>
  );
};

const styles=StyleSheet.create({
});

export default SearchScreen;
