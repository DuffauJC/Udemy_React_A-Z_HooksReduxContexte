import { useState, useCallback, useMemo } from 'react';
import './App.css';
import useDimension from './useDimension';

function App() {

    const browserWidth = useDimension()
    
    //console.log(browserWidth);

    if (browserWidth > 772) {
        console.log('grand ecran');
    } else {
        console.log('petit ecran');
    }




    return (
        <div className="App">


        </div>
    );
}

export default App;
