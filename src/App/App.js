import React , {Component} from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import appiKey from './keys';

class App extends Component{

    state = {
        temperatura: '',
        description:'',
        humedad:'',
        wind_speed:'',
        city:'',
        error:''
    }



    getWeather = async (e)=>{

        e.preventDefault();
        console.log(e.target.elements)
        const {city,country} =  e.target.elements
        console.log(city.value, country.value)

        if(city.value){
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${appiKey}`
            const response = await fetch(API_URL);
            const data = await response.json();
            
    
            this.setState({
                temperatura : data.main.temp,
                description : data.weather[0].description,
                humedad : data.main.humidity,
                wind_speed : data.wind.speed,
                city : data.name,
                error : null
            })
        }
        else{
            this.setState({error:'Please Enter a City and Country'})
        }

    }

    render(){
        return(
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <WeatherForm getWeather={this.getWeather} />    
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;