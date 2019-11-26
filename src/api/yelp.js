import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization: 'Bearer QXiA4-_ivCI46MB8mb1Fm3XUtRgBHSMzIA09Huv8JAokiO1UMzNJj4ZBmX3mRNkJicpBYxCb5dQ0F4-Ocxqj3vZ9vVj4k5MP3sTtCp0LzZoI9qTgqxSQi89852zcXXYx'
  }
});
