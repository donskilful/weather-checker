import React from 'react';



const Weather = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1>London</h1>
                <h5 className="py-4">
                <i class="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>
                </h5>
                <h1 className="py-2">25&deg;c</h1>

                {/** SHOW MAX AND MIN TEMP */}
                {minmaxTemp(20, 30)}

                <h4 className="py-3">Slow Rain</h4>
            </div>
        </div>
    );
}

function minmaxTemp (min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;c</span>
            <span className="px-4">{max}&deg;c</span>
        </h3>
    )
}



export default Weather;