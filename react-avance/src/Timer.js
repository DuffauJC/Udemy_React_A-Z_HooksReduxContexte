import { useState, useEffect } from 'react';


function Timer() {

    const [timer, setTimer] = useState(1)

    useEffect(() => {

        const intervalID = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            alert('composant détruit')
            clearInterval(intervalID)
        }
    }, [])
///////////// fragment pas de noeud issue de div
    return (
        <>
            <h1>Le timer :{timer}</h1>
        </>
    );
}

export default Timer;
