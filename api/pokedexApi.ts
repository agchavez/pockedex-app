import axios from 'axios';

 const pokedexApi = axios.create({
    baseURL: process.env.LOCAL_API_URL,
})


export default pokedexApi;