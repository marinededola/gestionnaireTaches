import React from 'react'

const Item = ({ text, createDate }) => {
    return (
        <li>
            <a>{text}</a>
            <a>{createDate}</a>
        </li>
    )
}

export default Item
