import React from "react";

const Form =(props) => {
    
        return(
          <form onSubmit={props.getWeather}>
            <h2>Welcome WeatherApp</h2>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country"  placeholder="Country..." />
            <button> Get Weather </button>

          </form>
        )
    
}
export default Form;