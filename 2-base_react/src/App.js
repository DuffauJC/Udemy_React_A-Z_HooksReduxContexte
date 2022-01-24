import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {

  const [monState, setMonState] = useState(10)

  const [inputData, setInputData] = useState()

  const [toggle, setToggle] = useState(true)

  const [dataArr, setDataArr] = useState([
    { nom: 'Marcelle' },
    { nom: 'Martine' },
    { nom: 'Maryline' }
  ])




  const changeToggle = () => {
    setToggle(!toggle)
  }
  const modifyState = (data) => {
    //console.log('data',data)
    setMonState(data)
  }
  const changeInput = (e) => {
    setInputData(e)
  }



  ///////// rendu conditonnel if

  // let toggleContenu

  // if (toggle) {
  //   toggleContenu = <h1> Le state est true</h1>
  // } else {
  //   toggleContenu = <h1> Le state est false</h1>
  // }

  // if (toggle) {
  //   return (
  //     <div className="App">
  //       {toggleContenu}
  //       <button onClick={changeToggle}>Change toggle</button>
  //     </div>
  //   );
  // } else if (toggle === false) {
  //   return (
  //     <div className="App">
  //       {toggleContenu}
  //       <button onClick={changeToggle}>Change toggle</button>
  //     </div>
  //   )
  // }





  /////////////// ternaire

  // return (
  //   <div className="App">
  //     {toggle ? <h1> Le state est true</h1>
  //       :
  //       <h1> Le state est false</h1>
  //     }
  //     <button onClick={changeToggle}>Change toggle</button>
  //   </div>
  // );




  //////////////////  short circut opérator
  // affiche le titre si le toggle est true
  // return (
  //   <div className="App">
  //     {
  //       toggle && <h1> Le state est true</h1>
  //     }
  //     <button onClick={changeToggle}>Change toggle</button>
  //   </div>
  // );




  //////////////// CSS, toggle, ternaire

  // return (
  //   <div className="App">
  //    <div className={toggle ? "box animated" :"box"}></div>
  //     <button onClick={changeToggle}>Change toggle</button>
  //   </div>
  // );





  /////////// Liste de données

  // return (
  //   <div className="App">
  //     {dataArr.map((item,index) => {
  //       return <p key={index}>Nom : {item.nom}</p>
  //     })}
  //   </div>
  // );


  return (
    <div className="App">

      <h1> Salut voyageur </h1>
      <h2> Etat du state : {monState}</h2>

      <Item txt={"Salut Word"} number={monState} func={modifyState} />

      <input
        type="text"
        value={inputData}
        onInput={e => changeInput(e.target.value)} />

      <button onClick={changeToggle}>Change toggle</button>

    </div>
  );
}

export default App;
