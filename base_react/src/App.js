import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {

  const [monState, setMonState] = useState(10)
  
  const [inputData, setInputData] = useState()

  const [toggle,setToggle]=useState(true)


  const modifyState = (data) => {
    //console.log('data',data)
    setMonState(data)
  }
  const changeInput = (e) => {
    setInputData(e)
  }
  //console.log(inputData);

  return (
    <div className="App">

      <h1> Salut voyageur </h1>
      <h2> Etat du state : {monState}</h2>

      <Item txt={"Salut Word"} number={monState} func={modifyState} />

      <input
        type="text"
        value={inputData}
        onInput={e => changeInput(e.target.value)}/>

      


    </div>
  );
}

export default App;
