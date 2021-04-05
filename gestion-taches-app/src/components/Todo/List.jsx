import React from 'react'
import Item from './Item'


const List = ({ todoList, handleStateChange, type  }) => {

    let keyIncr = 0;

    //Tri par date de création la plus récente
    todoList.sort(function (a, b) {
        a = new Date(a.createdAt).getTime()
        b = new Date(b.createdAt).getTime()
        return b - a;
    });

    //Déclaration de composant Item pour chaque élément de la liste
    return (
        <ul id={type}>
            {
            todoList &&
            todoList.map(
                (action) => { 
                        keyIncr++;
                        return (<Item 
                                    text={action.description}
                                    createDate={new Date(action.createdAt).toLocaleDateString('en-US')}  
                                    handleStateChange={handleStateChange}   
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
