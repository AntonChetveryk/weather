import React from 'react';
import CityForm from './CityForm'



class App extends React.Component {
    
    state = {
        showWeatherDiv: false
    };
    
    showWeather = () => {
         this.setState({
          showWeatherDiv: true
        });
    }
    
    render() {
        return ( 
            <div>
                <CityForm showWeather={this.showWeather}/>
                {(this.state.showWeatherDiv === true)
                 ? <div className='showWeatherClass'>WeatherDiv</div> 
                 : ''}
            </div>
        )
    }
}

export default App;