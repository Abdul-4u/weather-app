import React, { useState } from 'react'
import './Weather.css'
import clear from '../Assest/clear.png'
import cloud from '../Assest/cloud.png'
import rain from '../Assest/rain.png'
import snow from '../Assest/snow.png'
import drizzle from '../Assest/drizzle.png'
import humidity from '../Assest/humidity.png'
import searching from '../Assest/search.png'
import wind from '../Assest/wind.png'

export const Weather = () => {


    let api_key = "c1a639eafd64811c5973b2dbce0e0efe"

    const [wicon, setWicon] = useState(cloud);
    const search = async () => {
        const element = document.getElementsByClassName('cityInput')
        if (element[0].value === '') {
            alert('Please enter city name')
            return 0;

        }


        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity%');
        const wind = document.getElementsByClassName('windrate');
        const temp = document.getElementsByClassName('temp');
        const loc = document.getElementsByClassName('loc');

        humidity[0].innerHTML = data.main.humidity + '%';
        wind[0].innerHTML = Math.floor(data.wind.speed )+ 'km/h';
        temp[0].innerHTML = Math.floor(data.main.temp )+ '°C';
        loc[0].innerHTML = data.name;


        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(clear)
        }
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(cloud)
        }
        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(drizzle)
        }
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWicon(drizzle)
        }
        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setWicon(rain)
        }
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setWicon(rain)
        }

        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setWicon(snow)
        }
        else {
            setWicon(clear)
        }


    }
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' placeholder='Search City' className='cityInput' />
                <div className='search-icon' onClick={() => { search() }}>
                    <img src={searching} alt='search' className='search' />

                </div>


            </div>


            <div className='weather-image'>
                <img src={wicon} alt='clear' className='cloud' />

            </div>

            <div className='temp'>
                24°C
            </div>
            <div className='loc'>
                London
            </div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity} alt='' className='icon' />
                    <div className='data'>
                        <div className='humidity%'>
                            64%
                        </div>
                        <div className='text'>
                            Humidity
                        </div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind} alt='' className='icon' />
                    <div className='data'>
                        <div className='windrate'>
                            18 km/h
                        </div>
                        <div className='text'>
                            wind speed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
