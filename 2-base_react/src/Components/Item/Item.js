import React, { useState } from "react";
import './Item.css'
import toutou from '../../assets/toutou.jpg'



export default function Item(props) {

    const [itemState, setItemState] = useState('Item state !')
    // console.log(props);

    // style css
    //const toggle = false
    //const styleCSS = { color: toggle ? "crimson" : 'green', fontSize: '50px' }

    const myletter = 'g'

    return (
        <div>
            <h1

                // ternaire
                //style={{ color: toggle ? "crimson" : 'green', fontSize: '50px' }}
                //style={styleCSS}

                className="titre-item"
            >{props.txt} depuis le composant Item</h1>
            <p>Le state vu depuis Item : {props.number}</p>

            <button onClick={() => props.func(itemState)}>Change state</button>



            <p> img depuis public images</p>
            {/* <img src={process.env.PUBLIC_URL+`/images/mahdi.jp${myletter}`} alt="" /> */}

            <p>img depuis src</p>
            {/* <img src={toutou} alt="" /> */}

        </div>
    )
}
