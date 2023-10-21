import React from 'react';

const Form = (props) =>
{
    let handleSubmitGetCity = e =>
    {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        props.getWeather(city);
    }
    return (
        <form onSubmit={handleSubmitGetCity}>
            <input type={'text'} name={'city'} placeholder={'Enter city'}/>
            <button type={'submit'}>Get weather</button>
        </form>
    );
};

export default Form;