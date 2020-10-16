import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';



const Main = () =>{
    const api_call = async() => {
       const API_KEY = process.env.REACT_APP_API_KEY; 
       const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`; 
       const request = axios.get(url)
       const response = await request
       console.log(response)
    }
    useEffect(()=>{
        api_call()
    },[])
    return(
        <div className="main">
            <Header/>
            <Content>
                <WeatherSearch api_call={api_call}/>
            </Content>
        </div>
    )
}
export default Main;