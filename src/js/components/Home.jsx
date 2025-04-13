import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [priorityIds, setPriorityIds] = useState([]);
  
	return (
	  <div className="container">
		<h1>todos</h1>
		<ul className="to-do-container">
		  <li>
			<input
			  type="text"
			  onChange={(e) => setInputValue(e.target.value)}
			  value={inputValue}
			  onKeyDown={(e) => {
				if (e.key === "Enter" && inputValue.trim().length >= 3) {
				  const newTask = {
					id: Date.now(), 
					text: inputValue.trim()
				  };
				  setTodos([...todos, newTask]);
				  setInputValue("");
				}
			  }}
			  placeholder="Add pending task"
			  style={{width: "100%", }}
			/>
		  </li>
  
		  {todos.map((item) => (
			<li key={item.id}>
			  {item.text}
			  <i
				className="fa-solid fa-trash"
				style={{ 
					fontSize: "28px",
					float: "right", 
					color: "grey",
					display: "flex",
				 	alignItems: "center"
				}}
				onClick={() => {
				  setTodos(todos.filter((t) => t.id !== item.id));
				  setPriorityIds(priorityIds.filter((id) => id !== item.id));
				}}
			  ></i>
			  <button
				className="btn btn-secondary"
				style={{
				  float: "right",
				  marginRight: "10px",
				  height: "30px",
				  display: "flex",
				  alignItems: "center",
				  justifyContent: "center",
				  backgroundColor: priorityIds.includes(item.id) ? "orange" : ""
				}}
				onClick={() => {
				  if (priorityIds.includes(item.id)) {
					setPriorityIds(priorityIds.filter((id) => id !== item.id));
				  } else {
					setPriorityIds([...priorityIds, item.id]);
				  }
				}}
			  >
				Priority
			  </button>
			</li>
		  ))}
  
		  <div style={{ color: "lightgray" }}>{todos.length} Tasks pending</div>
		</ul>
	  </div>
	);
  };
  


export default Home;