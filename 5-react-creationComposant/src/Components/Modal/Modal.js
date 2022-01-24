import React, { useState } from 'react'
import './Modal.css'


export default function Modal() {
    const [modal, setModal] = useState(false)


    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button
                className="btn-modal"
                onClick={toggleModal}
            >Open</button>

            {modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modale</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos iure ipsum rem quod voluptate ducimus assumenda at nihil. Ab possimus itaque accusantium iusto fuga blanditiis est reiciendis praesentium sint molestias delectus iste repudiandae qui necessitatibus, non eius exercitationem harum tempora odit. Odit quod repudiandae iste aut natus incidunt officiis a.</p>

                            <button
                                onClick={toggleModal}
                                className="close-modal">CLOSE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
