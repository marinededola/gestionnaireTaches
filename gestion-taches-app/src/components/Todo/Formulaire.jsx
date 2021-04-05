import React from 'react'

const Formulaire = ({
    handleInsert = () => { },
    handleInputChange = () => { }
}) => {

    return (
        <div>
            <input type="text" onChange={(event) => handleInputChange(event) }/>
            <button onClick={() => { handleInsert() }}>Ajout</button>
        </div>
    )
}

export default Formulaire
