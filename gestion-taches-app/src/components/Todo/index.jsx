
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
    const updateListTodos = () =>{
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


    //Ajouter une tâche
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
    
    //Terminer une tâche
    const changeStateTodo = (idToChange) => {
        axios.put('https://6053736845e4b30017291b83.mockapi.io/tasks/'+idToChange,
        {
            isComplete: true
        })
        .then(() => {
            updateListTodos()
        })
        .catch(error => {
            alert("The request failed!");
        })
    }

    //Supprimer toutes les tâches terminées
    const deleteAllCompleteTasks = () =>{
        itemListComplete.forEach((item) => {
            axios.delete('https://6053736845e4b30017291b83.mockapi.io/tasks/'+item.id)
            .then(() => {
                updateListTodos()
            })
            .catch(error => {
                alert("The request failed!");
            })
        })

    }
	return (
		<div id="main">
			<h2>Gestionnaire de tâches</h2>
            <Formulaire
                handleInsert = { insertTodo }
                handleInputChange = { setTodoInput }
            />
            <div id="lists">
                <div className="list" id="listNotComplete">
                    <h3>Tâches en cours</h3>
                    <List todoList = { itemListNotComplete } handleStateChange = { changeStateTodo } type = "listNotComplete" />
                </div>
                <div className="list" id="listComplete">
                    <h3>Tâches terminées</h3>
                    <button onClick={() => deleteAllCompleteTasks(itemListComplete) }>Supprimer toutes les tâches terminées</button>
                    <List todoList = { itemListComplete } type = "listComplete"/>
                </div>
            </div>
		</div>
	)
}

export default Todo




