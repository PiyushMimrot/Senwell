import React, { useEffect, useState } from 'react'

export default function UseHooks() {
    let [data,setData] = useState();

    async function FetchingData(){
   let response = await fetch('https://dummyjson.com/products/1');
   let data = await response.json();
   console.log(data)
    }
    useEffect(()=>{
        FetchingData();
    },[])

  return(
    [data]
  ) 
   
  
}

