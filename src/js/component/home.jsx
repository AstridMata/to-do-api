import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todolist, setTodolist] = useState([]);
	const [newlist, setNewlist] = useState("");

	useEffect(() => {
		const getTodo = () => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA", {
				method: "GET",
				body: JSON.stringify(getTodo),
				headers: {
					"Content-Type": "application/json",
				},
			})
				// las promesas
				.then((response) => response.json())
				.then((data) => setNewlist(data));
		};
		getTodo();
	}, []);

	useEffect(() => {
		const getTodo = () => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA", {
				method: "PUT",
				body: JSON.stringify(getTodo),
				headers: {
					"Content-Type": "application/json",
				},
			})
				// las promesas
				.then((response) => response.json())
				.then((data) => setNewlist(data));
		};
		getTodo();
	}, []);

	const updatelist = ({ target }) => {
		// Update query onKeyPress of input box
		setNewlist(target.value);
	};

	const Search = ({ newlist }) => <li>{newlist}</li>;

	return (
		<div className="container">
			<ul className="list-group">
				<input onChange={updatelist}></input>
				{todolist.map((newlist, i) => (
					<Search
						newlist={newlist}
						// Prevent duplicate keys by appending index:
						key={newlist + i}
					/>
				))}
			</ul>
			<button onClick={() => setTodolist([...todolist, newlist])}>
				Add Item
			</button>
		</div>
	);
};

export default Home;
