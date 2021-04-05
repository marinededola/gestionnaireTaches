
import React, {useState, useEffect } from 'react'
import List from './List'
import axios from "axios";

const Todo = () => {	

	const [itemListNotComplete, setItemListNotComplete] = useState([])
	const [itemListComplete, setItemListComplete] = useState([])

    //Récupération des données de l'API
    useEffect(() => {
        axios.get('https://6053736845e4b30017291b83.mockapi.io/tasks')
               .then(res => {
                const initItemList = res.data;
                const notComplete = initItemList.filter(element => element.isComplete !== true)
                setItemListNotComplete(notComplete);
                const complete = initItemList.filter(element => element.isComplete === true)
                setItemListComplete(complete);
            })
       }, [])

	return (
		<div>
			<h2>Gestionnaire de tâches</h2>
            <h3>Tâches en cours</h3>
			<List todoList = { itemListNotComplete } />
            <h3>Tâches terminées</h3>
            <List todoList = { itemListComplete } />

		</div>
	)
}

export default Todo




