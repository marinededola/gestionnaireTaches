import React from 'react'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ text, createDate, handleStateChange, id   }) => {

    return (
        <li>
            {createDate}
            -
            {text}
            {handleStateChange && <button onClick={() => { handleStateChange(id) }}><FontAwesomeIcon icon={faCheck} /></button>}

        </li>
    )
}

export default Item
