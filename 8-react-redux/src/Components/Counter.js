import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../redux/reducers/dataImgReducer';

export default function Counter() {

    const [cartData, setCartData] = useState(0)

    const count = useSelector(store => store.counterReducer.count)

    const cart = useSelector(store => store.addCartReducer.cart)
  
    const imgURL = useSelector(store => store.dataImgReducer.imgURL)

    const dispatch = useDispatch()

    const incrFunc = () => {
        dispatch({
            type: 'INCR'
        })
    }

    const decrFunc = () => {
        dispatch({
            type: 'DECR'
        })
    }

    const addToCartFunc = () => {
       
        dispatch({
            type: 'ADDCART',
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    }, [])
    




    return (
        <div>
            <h1>Les données : {count}</h1>
            <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button><br />

            <h2>Votre panier :{cart}</h2>
            <input
                defaultValue={cartData}
                onInput={e => setCartData(e.target.value)}
                type="number" /><br />
            <button onClick={addToCartFunc}>Ajouter au panier</button><br />
            {imgURL && <img  style={{width:"300px"}}src={imgURL}/>}
        </div>
    )
}
