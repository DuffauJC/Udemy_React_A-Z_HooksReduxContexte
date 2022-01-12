import React,{useState,useRef,useEffect} from 'react'
import './Accord.css'
import Chevron from './Chevron.png'
    
    
    

export default function Accord() {

    const [toggle, settoggle] = useState(false)
    const[heightEl,setHeightEl]=useState()



    const toggleState = () => {
        settoggle(!toggle)
    }

    const refHeight=useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
      
    }, [])


    return (
        <div className='accord'>

            <div
                onClick={toggleState}
                className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron-down" />
            </div>

            <div ref={refHeight}
                className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height:toggle ? `${heightEl}`:"0px"}}
            >

                <p aria-hidden={toggle ? "true":false}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic exercitationem quis odit natus debitis deleniti, repellendus iste ea eveniet voluptates esse doloribus, dolor commodi porro alias accusamus eos quod?
                </p>
            </div>
        </div>
    )
}
