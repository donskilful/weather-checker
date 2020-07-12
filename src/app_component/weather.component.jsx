import React from 'react';



const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-10">
                <h1>{props.city}</h1>
                <h5 className="py-4">
                    <i class={`fa ${props.weatherIcon}`}></i>
                </h5>

                {props.temp_celsius ? (
                    <h1 className="py-2">{props.temp_celsius}&deg;c</h1>
                ) : null}

                {/** SHOW MAX AND MIN TEMP */}
                {minmaxTemp(props.temp_min, props.tem_max)}

                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;c</span>
                <span className="px-4">{max}&deg;c</span>
            </h3>
        )
    }
}



export default Weather;