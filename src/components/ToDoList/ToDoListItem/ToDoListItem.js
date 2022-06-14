import React from 'react';
import styles from "./ToDoListItem.module.css"

function ToDoListItem({ isChecked, toggleTodo, deleteItem, text}) {
	return (
			<li className={styles.listItem} >
				<input className={styles.input} type="checkbox" checked={isChecked} onChange={toggleTodo}/>
				<span>{text}</span>
				<span onClick={deleteItem} className={styles.deleteBtn}>&times;</span>
			</li>
	);
}

export default ToDoListItem;