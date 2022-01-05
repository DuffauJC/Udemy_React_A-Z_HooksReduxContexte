import { useState, useEffect, useRef } from 'react';
import './App.css';
import Timer from './Timer';
import Video from './Video.mp4'

function App() {

  const [dataComponent, setDataComponent] = useState(1)

  const [dataImg, setDataImg] = useState()


  ///////// destruction composant "timer"
  const [toggle, setToggle] = useState(true)

  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }

  const ref = useRef([])


  const toggleFunc = () => {
    setToggle(!toggle)
  }

  const addToRef = (el) => {
    //console.log(el);
    if (el&& !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  // useEffect(() => {
  //   console.log('changement de datacomponent');
  // }, [dataComponent])


  // useEffect(() => {
  //   fetch('https://api.thecatapi.com/v1/images/search')
  //     .then(response => {
  //       //console.log(response);
  //       return response.json()
  //     }).then((data) => {
  //       //console.log(data);
  //       setDataImg(data[0].url)
  //     })

  // }, [])

  // useEffect(() => {
  //   console.log(ref.current);
  //   // setTimeout(() => {
  //   //   ref.current.pause()
  //   // },10000)
  // },[])


  //// ecouteur d'evenement sur l'objet window
  // useEffect(() => {
  //   window.addEventListener('resize', actionResize)
  //   function actionResize() {
  //     console.log('resize !!!!');
  //   }
  //   return () => {
  //     window.removeEventListener('resize',actionResize)
  //   }
  // }, [])
  


  return (
    <div className="App">
      {/* {dataImg && <img src={dataImg} alt='cat image' style={{ width: '500px' }} />} */}

      {/* <h2>{toggle && <Timer />}</h2> */}

      {/* <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4' />
      </video> */}

      <button onClick={toggleFunc}>Toggle</button>

      {/* <h2>Le state est {dataComponent}</h2>
      <button onClick={changeState}>Change state</button> */}

    </div>
  );
}

export default App;
