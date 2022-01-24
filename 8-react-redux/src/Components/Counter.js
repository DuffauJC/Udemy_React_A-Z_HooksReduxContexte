import React from 'react';
import { useSelector } from 'react-redux';


export default function Counter() {

    const count = useSelector(store=>store.CounterReducer.count)
    console.log(count);


    return (
        <div>
            <h1>Les données : {count}</h1>
        </div>
    )
}
