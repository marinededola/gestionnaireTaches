import React from 'react'

const Item = ({ text, createDate, isComplete }) => {
    return (
        <li>
            {text}
            {createDate}
            {isComplete}
        </li>
    )
}

export default Item
