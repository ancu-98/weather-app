import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const changeTemperature = () => setIsCelsius(!isCelsius)

    return (
        <article className='card'>
            <h1 className='card--title' >W E A T H E R - A P P </h1>
            <h2 className='card--subtitle' >{`${weather?.name}, ${weather?.sys.country}`}</h2>
            <section className='card--first-section'>
                <img className='card--icon' src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`: ''} alt="icon-weather" />
            </section>
            <section className='card--second-section'>
                <h3 className='second--title' >'{weather?.weather[0].description}'</h3>
                <ul className='second--list' >
                    <li className='second--item'> <span className='second--span'>Win Speed</span> {weather?.wind.speed} m/s</li>
                    <li className='second--item'> <span className='second--span'>Clouds</span> {weather?.clouds.all} %</li>
                    <li className='second--item'> <span className='second--span'>Presure</span> {weather?.main.pressure} hPa</li>
                </ul>
            </section>
            <h2 className='card--temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
            <button className='card--btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
        </article>
    )
}

export default WeatherCard