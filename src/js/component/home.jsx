import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todolist, setTodolist] = useState([]);
	const [newlist, setNewlist] = useState("");
	const [info, setInfo] = useState([]);

	// useEffect(() => {
	// // 	const getTodo = () => {
	// // 		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA", {
	// // 			method: "GET",
	// // 			body: JSON.stringify(getTodo),
	// // 			headers: {
	// // 				"Content-Type": "application/json",
	// // 			},
	// // 		})
	// // 			// las promesas
	// // 			.then((resp) => {
	// // 				// console.log(resp.ok); // will be true if the response is successfull
	// // 				// console.log(resp.status); // the status code = 200 or code = 400 etc.
	// // 				// console.log(resp.text()); // will try return the exact result as string
	// // 				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	// // 			})
	// // 			.then((data) => setInfo(data));
	// // 	};
	// // 	getTodo();
	// // }, []);

	useEffect(() => {
		// codigo aqui
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA")
			// las promesas
			.then((response) => response.json()) // a la respuesta pasamela a tipo json
			.then((data) => setInfo(data)); //
	}, []);

	// useEffect(() => {
	// 	const getTodo = () => {
	// 		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA", {
	// 			method: "PUT",
	// 			body: JSON.stringify(getTodo),
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 		})
	// 			// las promesas
	// 			.then((response) => response.json())
	// 			.then((data) => setNewlist(data));
	// 	};
	// 	getTodo();
	// }, []);

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
			<div>
				{info.map((info, i) => (
					<li key={i}>{info.label}</li>
				))}
			</div>
		</div>
	);
};

export default Home;
