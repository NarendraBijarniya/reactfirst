import React, { useState } from 'react'

export default function Car() {

    // const [brand, setBrand] = useState("Honda");
    // const [model, setModel] = useState("Civic");
    // const [year, setYear] = useState("2024");
    // const [color, setColor] = useState("Brown");
    // const [gear, setGear] = useState(5);

    const [car, setCar] = useState({
        brand: "Honda",
        model: "Civic",
        year: "2024",
        color: "Brown",
        gear: 5
    });

    const updateColor=()=> {
        setCar(previousState=>{
            return{...previousState,color:"Blue"}
        });
    }

    return (
        <div className='container'>
            {/* <h1>The car is {brand}</h1>
            <p>It is a {color} {model} from {year} having {gear} gear's</p> */}

            <h1>The car is {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year} having {car.gear} gear's.</p>
            <button type='button' className='btn btn-primary' onClick={updateColor}>Blue</button>
        </div>
    )
}
