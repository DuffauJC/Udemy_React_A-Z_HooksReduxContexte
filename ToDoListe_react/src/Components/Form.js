import React, { useState } from 'react'
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {



    const [dataArr, setDataArr] = useState([
        { txt: 'Promener le chien', id: uuidv4() },
        { txt: 'Sport', id: uuidv4() },
        { txt: 'Coder avec react', id: uuidv4() }
    ])

    const [stateInput, setStateInput] = useState('')

    const deleteElement = (id) => {
        //console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filteredState)
    }

    // remplacer par composant controllé, mise à jour du state via onChange
    // const linkedInput = (e) => {
    //     //console.log(e);
    //     setStateInput(e)
    // }

    const addTodo = (e) => {
        e.preventDefault()
        const newArr = [...dataArr]
        const newTodo = {}

        newTodo.txt = stateInput
        newTodo.id = uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput('')
    }

    return (
        <div className='m-auto px-4 col-12 col-sm-10 col-lg-6'>
            
            <form onSubmit={(e)=>addTodo(e)} className='mb-3'>
                <label htmlFor="todo" className="form-label mt-3">
                    Chose à faire</label>
                
                <input
                    onChange={e => setStateInput(e.target.value)}
                    value={stateInput}
                    type="text"
                    className="form-control"
                    id="todo" />

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des chose à faire</h2>
            <ul className="list-group">
                {dataArr.map((item) => {
                    return (
                        <Item txt={item.txt} key={item.id} delFunc={deleteElement} id={item.id} />
                    )
                })}
            </ul>
        </div>
    )
}
