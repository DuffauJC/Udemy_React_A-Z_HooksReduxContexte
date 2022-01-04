import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1)

  const [dataImg, setDataImg] = useState()

  const [timer, setTimer] = useState(1)


  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }

  useEffect(() => {

   const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  // useEffect(() => {
  //   console.log('changement de datacomponent');
  // }, [dataComponent])


  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        //console.log(response);
        return response.json()
      }).then((data) => {
        //console.log(data);
        setDataImg(data[0].url)
      })

  }, [])


  return (
    <div className="App">
      {dataImg && <img src={dataImg} alt='cat image' style={{ width: '500px' }} />}

      <h1>Le timer :{timer}</h1>
      <h2>Le state est {dataComponent}</h2>
      <button onClick={changeState}>Change state</button>

    </div>
  );
}

export default App;
