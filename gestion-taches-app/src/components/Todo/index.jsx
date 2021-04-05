
import React, {useState, useEffect } from 'react'
import List from './List'
import Formulaire from './Formulaire'
import axios from "axios";

const Todo = () => {	

	const [itemListNotComplete, setItemListNotComplete] = useState([])
	const [itemListComplete, setItemListComplete] = useState([])
    const [todo, setTodo] = useState("")
    const [maxId, setMaxId] = useState("")


    //Mise à jour de la liste des tâches
    function updateListTodos (){
        axios.get('https://6053736845e4b30017291b83.mockapi.io/tasks')
        .then(res => {
            const initItemList = res.data
            const notComplete = initItemList.filter(element => element.isComplete !== true)
            setItemListNotComplete(notComplete)
            const complete = initItemList.filter(element => element.isComplete === true)
            setItemListComplete(complete)
            const idList = []
            initItemList.map(item => idList.push(item.id))
            const newMaxId = idList.reduce(function(a,b) {
                return Math.max(a, b);
            });
            setMaxId(newMaxId);
        })
        .catch(error => {
            alert("The request failed!");

        })
    }
    
    //Récupération des données de l'API lors de l'initialisation du composant
    useEffect(() => {
        updateListTodos();
    }, [])


    //Ajout d'une tâche
    const setTodoInput = (event) => {
        setTodo(event.target.value)
    }

    const insertTodo = () => {
        setMaxId(maxId + 1)
        const newTodo = {
            id: maxId,
            createdAt: new Date().toString(),
            description: todo,
            isComplete: false
        }
        const newItemList = itemListNotComplete

        axios.post('https://6053736845e4b30017291b83.mockapi.io/tasks/',
        {
            id: newTodo.id,
            createdAt: newTodo.createdAt,
            description:newTodo.description,
            isComplete: newTodo.isComplete
        })
        .then(() => {
            updateListTodos()
        })
        .catch(error => {
            alert("The request failed!");
        })
       
    }
    

	return (
		<div>
			<h2>Gestionnaire de tâches</h2>
            <Formulaire
				handleInsert = { insertTodo }
                handleInputChange = { setTodoInput }
			/>
            <h3>Tâches en cours</h3>
			<List todoList = { itemListNotComplete } />
            <h3>Tâches terminées</h3>
            <List todoList = { itemListComplete } />

		</div>
	)
}

export default Todo



