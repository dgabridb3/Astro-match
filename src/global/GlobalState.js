import React from "react";
import { useState,useEffect } from 'react'
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios"
import { BASE_URL } from "../constants/url";

const GlobalState = (props) => {

   
   const [profileChoose, setProfileChoose] = useState({})
   const [matches, setMathes] = useState()
  
   
   

   const getProfileToChoose = async() => {
    const res = await axios.get(`${BASE_URL}/person`)
    setProfileChoose(res.data)
   }
    
  
   

   const getMaches = async() => {
    const res = await axios.get(`${BASE_URL}/matches`)
    setMathes(res.data)
   }
 
   
   const postChoosePerson = async(choice) => {
      const body = {
         id: profileChoose.profile.id,
         choice: choice
      }

      await axios.post(`${BASE_URL}/choose-person`, body)
     
      getProfileToChoose()
      getMaches()
     
   }


   
    
   useEffect(()=>{
    getProfileToChoose()
    getMaches()
   }, [])
  

   const clear = async() => {
      await axios.put(`${BASE_URL}/clear`)
      getProfileToChoose()
      getMaches()
   }

   const request = {
    profileChoose,
    matches,
    clear,
    postChoosePerson, 
   }
   
   
    return(
        <GlobalStateContext.Provider value={{request}}> 
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState