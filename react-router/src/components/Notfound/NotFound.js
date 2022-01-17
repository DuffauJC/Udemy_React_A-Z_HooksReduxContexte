import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function NotFound() {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Cette page n'existe pas !!!'</h1>
            <button onClick={goHome}>Retourner à l'accueil</button>
        </div>
    )
}
