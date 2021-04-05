import React from 'react'
import Item from './Item'


const List = ({ todoList, handleStateChange  }) => {

    let keyIncr = 0;

    //Tri par date de création la plus récente
    todoList.sort(function (a, b) {
        a = new Date(a.createdAt).getTime()
        b = new Date(b.createdAt).getTime()
        return b - a;
    });

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
                                    isComplete={action.isComplete.toString()}
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
