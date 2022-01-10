import { useState, useCallback, useMemo } from 'react';
import './App.css';
import Content from './Content';

function App() {

  const [toggle, setToggle] = useState([1, 2, 3])


  const toggleFunc = () => {
    const newArr = [...toggle]
    newArr.push(4)

    setToggle(newArr)
  }


  // ne marche pas avec props.children
  // pas réaffichage du composant
  const tableau = useMemo(() => {
    return [1, 2, 3, 4]
  }, [])
  
  // ne marche pas avec props.children
  // pas recreation de la fonction dans les props pas de mise à jour du composant
  const foo = useCallback(() => {
    console.log('clic');
  }, [])





  return (
    <div className="App">
      {/* <Content>
        <h1>Titre mon article 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content> */}
      <Content num={tableau} foo={foo} />


      <button onClick={toggleFunc}>Toggle</button>

    </div>
  );
}

export default App;
