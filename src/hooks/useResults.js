import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () =>{
  const [results,setResults]=useState([]);
  const [err,setError]=useState("");

  const searchApi =async (searchTerm)=>{
    try{
      const response = await yelp.get('/search',{
        params:{
          limit:50,
          term:searchTerm,
          location:'san jose'
        }
      });
      setResults(response.data.businesses);
      setError("");
    }catch(err){
      setError("Something went wrong. Try again later");
    }
  }

  useEffect(()=>{
    searchApi('pasta');
  }, [])

  return [searchApi, results, err];
}
