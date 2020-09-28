import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

function Results(){
    
    const [gainedData,setGainedData] = useState([])
    const [burnedData,setBurnedData] = useState([])
    
    let cal_gained = useRef(0)
    let cal_burned = useRef(0)
    
    useEffect(()=>{
        axios.get('http://localhost:3500/burned')
        .then(res=>{
            setBurnedData(res.data)
            console.log(cal_burned)
            return res.data
        })
        .then(
            res=>{
                cal_burned.current  = res.reduce((ac,el)=>{
                    return ac+Number(el.calories)
                },0)
            }
        )
        .catch(err=>console.log(err))       
   
         axios.get('http://localhost:3500/gained')
        .then(res=>{
            setGainedData(res.data)
            console.log(cal_gained)
            return res.data
        })
        .then(
            res=>{
                cal_gained.current  = res.reduce((ac,el)=>{
                    return ac+Number(el.calories)
                },0)
            }
        )
        .catch(err=>console.log(err))
    },[cal_gained,cal_burned])


    return (
        <div>
            <div>
                <div>
                    <h2>Total Calories Gained {cal_gained.current}</h2>
                </div>
                <div>
                    <h2>Total Calories Burned {cal_burned.current} </h2>
                </div>
            </div>
        </div>
    )
    
}
export default Results