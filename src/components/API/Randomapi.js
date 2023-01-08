import React, { useState,useEffect } from 'react'

 function Randomapi () {
    let [random,setrandom]=useState([])
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=4")
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
          return setrandom(data.results)
        });

    },[])
    console.log(random)

  return (
    <div>
      {random?.map((rand,index)=>{
        <div key={index}>
          <h1>
            {rand.gender}
            {rand.name.title}
          {rand.name.first} {rand.name.last}
          </h1>
          <img src={rand.picture.large} alt="random" />

          <p>{rand.eamil}</p>
          <p>{rand.phone}</p>
          
        </div>
      })}
   </div>
  )
}
export default Randomapi