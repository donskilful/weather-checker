import React from 'react';


const Form = props => {
    return (
        <div className="container">
            <div className="welcome-note">
                <div className="welcome-title">Weather Checker</div>
                <div className="welcome-body">Enter name of city and country to get weather details</div>
            </div>
            <div className="error-alert">{props.error ? error() : null}</div>
            
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text"
                            className="form-control" name="city" autoComplete="off"
                            placeholder="City"
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text"
                            className="form-control" name="country" autoComplete="off"
                            placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const error = () => {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please enter City and Country
        </div>
    );
}

export default Form;