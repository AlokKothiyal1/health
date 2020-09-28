import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Links from './Links'

function Form(){

    const [state,setState] = useState({food:"",cal_gained:"",exercise:'',cal_burned:""})

    const handleChange = (e)=>{
      setState({...state,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        if(e.target.name==="gained_btn"){
            axios.post('http://localhost:3500/gained', {
                "food":state.food,
                "calories":state.cal_gained
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else{
            axios.post('http://localhost:3500/burned', {
                "exercise":state.exercise,
                "calories":state.cal_burned
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });    
        }

    }

    return (
        <div>
            <div>
                <h3>Calories Gained</h3>
                    <input onChange={handleChange} name="food" value={state.food} type="text" placeholder="Food item"></input>
                    <input onChange={handleChange} name="cal_gained" value={state.cal_gained} type="Number" placeholder="Calories"></input>
                    <button  name="gained_btn" onClick={handleSubmit}>+</button>  
            </div>
            <div>
                <h3>Calories Burned</h3>
                    <input onChange={handleChange} name="exercise" value={state.e} type="text" placeholder="Exercise"></input>
                    <input onChange={handleChange} name="cal_burned" value={state.cal_burned} type="Number" placeholder="Calories"></input>
                    <button  name="burned_btn" onClick={handleSubmit}>+</button>
            </div>
        
             <Links></Links>

        </div>
    )
}
export default Form