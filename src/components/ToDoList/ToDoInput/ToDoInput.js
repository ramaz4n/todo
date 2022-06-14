import React from 'react';
import styles from "./ToDoInput.module.css";

function ToDoInput({text, setText, addTodo}) {
	return (
		<label className={styles.label}>
			<input className={styles.input} placeholder="new todo" type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
			<button className={styles.btn} onClick={addTodo}>Add ToDo</button>
		</label>
	);
}

export default ToDoInput;
