import React, { useEffect, useState } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import styles from './ToDoList.module.css'
import ToDoListItem from './ToDoListItem/ToDoListItem';

// стили css писал как попало для быстроты, при необходимости могу строго по БЭМ

function ToDoList(props) {
	const [todos, setTodos] = useState([])
	const [text, setText] = useState('')

	const addTodo = () =>{
		if(text.trim()){
				setTodos([...todos,{
					id: new Date().getTime(),
					text,
					completed: false
				}])
			setText('');
		}
	}

	const deleteItem = (id) =>{
		setTodos(todos.filter(elem => id !== elem.id))
	}

	const toggleTodo = (id) =>{
		setTodos(todos.map((todo) => {
			if(todo.id == id){
				todo.completed = !todo.completed;
			}
			return todo
		}))
	}
	useEffect(()=>{
		let newList = todos.map(elem =>({
			id: new Date().getTime() + 1,
			text: elem,
			completed: false
		}))
		setTodos(newList)
	},[])

	return (
		<>
			<div className={styles.todoinput}>
				<ToDoInput
					text={text}
					setText={setText}
					addTodo={addTodo}
				/>
			</div>
			

			<div className={styles.ToDoList}>
				<div className={styles.todosWrap1}>
					<h2>Незавершенные задачи</h2>
					<ul className={styles.todoUl}>
						{
							todos.map(todo => {
								if(!todo.completed){
									return (	
										<ToDoListItem
											key={todo.id}
											text ={todo.text}
											isChecked={todo.completed}
											toggleTodo={()=>toggleTodo(todo.id)}
											deleteItem={()=>deleteItem(todo.id)}
										/>
									)
								}
							})
						}
					</ul>
				</div>

				<div className={styles.todosWrap2}>
					<h2>Все задачи</h2>
					<ul className={styles.todoUl}>
						{
							todos.map(todo => (
								<ToDoListItem
									key={todo.id}
									text ={todo.text}
									isChecked={todo.completed}
									toggleTodo={()=>toggleTodo(todo.id)}
									deleteItem={()=>deleteItem(todo.id)}
								/>
							))
						}
					</ul>
				</div>
				
				<div className={styles.todosWrap3}>
					<h2>Завершенные задачи</h2>
					<ul className={styles.todoUl}>
						{
							todos.map(todo => {
								if(todo.completed){
									return (	
										<ToDoListItem
											key={todo.id}
											text ={todo.text}
											isChecked={todo.completed}
											toggleTodo={()=>toggleTodo(todo.id)}
											deleteItem={()=>deleteItem(todo.id)}
										/>
									)
								}
							})
						}
					</ul>	
				</div>
			</div>	
		</>
		
	);
}

export default ToDoList;