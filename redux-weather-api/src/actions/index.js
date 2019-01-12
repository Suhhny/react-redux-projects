import axios from 'axios';


const API_KEY = "2141deab76b92a0720a2294f0a97509e"
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export const FETCH_WEATHER = 'FETCH_WEATHER';  

export function fetchWeather(city){ 
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);   //promise - data structure returning request

    console.log('Request: ', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
} 

//Action creator 와 reducers 사이에 액션 타입을 일정하게 유지하기 위해 문자열 타입 먼저 선언

//axios : jquery와 비슷한 라이브러리.



//redux-promise : 