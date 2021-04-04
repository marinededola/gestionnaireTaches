import React from 'react'
import Item from './Item'


const List = ({ todoList }) => {

    let keyIncr = 0;

    //Déclaration de composant Item pour chaque élément de la liste
    return (
        <ul>
            {
            todoList &&
            todoList.map(
                (action) => { 
                        keyIncr++;
                        return (<Item 
                                    text={action.description}
                                    createDate={action.createdAt}  
                                    key={keyIncr} 
                                    id={action.id} 
                                />)
                    }
                )
            }
        </ul>
    )
}

export default List
