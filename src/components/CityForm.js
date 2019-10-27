import React from 'react';



class CityForm extends React.Component {
    render() {
        const {showWeather} = this.props;
        /*console.log(showWeather)*/
        return ( 
            <div className = "form">
                <form className="form-city">
                    <label htmlFor = "username">City</label> 
                    <input
                    type = "text"
                    className = "form-control"
                    id = "username"
                    placeholder = "input your city"
                    name = "cityname" 
                    />
                    <button type='button' onClick={showWeather}>Show weather</button>         
                </form>
            </div>
        )
    }
}

export default CityForm;