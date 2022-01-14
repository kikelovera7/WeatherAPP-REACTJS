import React from "react";


const WeatherForm = props => (
    <div className="card card-body">
        <form  onSubmit={props.getWeather}>
            <div className="mb-3">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus></input>
            </div>
            <div className="mb-3">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control"></input>
            </div>
            <div class="d-grid gap-2">

                <button className="btn btn-success btn-primary">
                    Get Weather
                </button>
                
            </div>
            
        </form>
    </div>
);


export default WeatherForm;