
import React, {useState, useEffect } from 'react'
import List from './List'
import axios from "axios";

const Todo = () => {	

	const [itemList, setItemList] = useState([])

    //Récupération des données de l'API
    useEffect(() => {
        axios.get('https://6053736845e4b30017291b83.mockapi.io/tasks')
               .then(res => {
                setItemList(res.data);
            })
       }, [])

	return (
		<div>
			<h2>Gestionnaire de tâches</h2>
			<List todoList = { itemList } />
		</div>
	)
}

export default Todo




