import React from "react";

const WeatherInfo = props =>{
    console.log(props)
    return(
        <div>   
            {
            props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.city ? 
                        <div className="card card-body">
                        <p>
                            {props.city ? `Location : ${props.city}`: ''}
                        </p>
                        <p>
                            {props.temperatura ? `Temperatura : ${props.temperatura} °C`: ''}
                        </p>
                        <p>
                            {props.humedad ? `Humedad : ${props.humedad}`: ''}
                        </p>
                    </div>
            :<div className="card card-body">
                nothing requested
                </div>}

        </div>
    )

}

export default WeatherInfo