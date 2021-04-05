import React from 'react'

const Item = ({ text, createDate, isComplete, handleStateChange, id   }) => {

    return (
        <li>
            {text}
            {handleStateChange && <button onClick={() => { handleStateChange(id) }}>Terminer</button>}
            {createDate}
            {isComplete}
        </li>
    )
}

export default Item
