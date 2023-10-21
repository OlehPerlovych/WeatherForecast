import React from 'react';

// const Weather = (props) =>
// {
//     if(props.weather.message)
//         return (
//             <div>
//                 <p>{props.weather.message}</p>
//             </div>
//         )
//     else
//     return (
//         <div>
//             <p>Location: {props.weather.country}, {props.weather.city} </p>
//             <p>Temperature: {props.weather.temperature} </p>
//             <p>Pressure: {props.weather.pressure} </p>
//             <p>Sunset: {props.weather.sunset}</p>
//         </div>
//     );
// };

const Weather = (props) => {
    return (
        <div style={{width: '60%', fontSize: '20px' , color: '#fff'}}>
            {!props.weather.message &&
            <div>
                <p>Location: {props.weather.country}, {props.weather.city} </p>
                <p>Temperature: {props.weather.temperature}<sup>o</sup>C</p>
                <p>Pressure: {props.weather.pressure} </p>
                <p>Sunset: {new Date(props.weather.sunset*1000).toTimeString()}</p>
            </div>
            }
            <p>{props.weather.message}</p>
        </div>
    )
};


export default Weather;