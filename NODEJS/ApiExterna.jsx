import axios from 'axios';



const Api = {

    getPersons: async function(){

        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users`);

        let {data} = await res;
        return data;

    }



}

export default Api;

import React, { useState, useEffect } from 'react';

import Api from './Api';



export default function App() {

  

  

  const [nomes, setNomes] = useState([{}]);



  async function initApi(){

      

      let pegaNomes = await Api.getPersons();

      setNomes(pegaNomes);

  }

  



  useEffect(() => {



      initApi();

      

  },[]);
