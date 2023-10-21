import React from 'react';
class FormControl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {city: ''};
    }

    handleChangeInput = e => this.setState({city: e.target.value});

    handleClick = () =>
    {
        this.props.getWeather(this.state.city);
        this.setState({city: ''});
    }
    render()
    {
        return (
            <div>
                <input type={'text'} name={'city'} placeholder={'Enter city'} onChange={this.handleChangeInput}
                    value={this.state.city}/>
                <button type={'submit'} onClick={this.handleClick}>Get weather</button>
            </div>
        );
    }
}

export default FormControl;