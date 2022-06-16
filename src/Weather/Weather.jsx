import React from "react";
import './Weather.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WidgetWeather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'a66b065cf401ea18e5a2176e42bbb1be',
        lat: '40.4367864',
        lon: '-3.6297047',
        lang: 'es',
        unit: 'metric', // values are (metric, standard, imperial)
        getWeather: true, // get weather data from OpenWeatherMap API
        reload: 60, // reload weather data every 60 seconds
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            locationLabel="Madrid"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast={false}
            getWeather={true}
            reload={60}

        />
    );
};

export default WidgetWeather;