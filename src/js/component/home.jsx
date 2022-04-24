import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [listTodos, setListTodos] = useState([]);
	const handleSumbit = (e) => {
		e.preventDefault();
		setTodo("");
		setListTodos([...listTodos, { id: listTodos.length, name: todo }]);
	};
	const deleteTodo = (id) => {
		setListTodos(listTodos.filter((item) => item.id !== id));
	};
	// const [todolist, setTodolist] = useState([]);
	// const [newlist, setNewlist] = useState("");
	// const [info, setInfo] = useState([]);

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

	// useEffect(() => {
	// 	// codigo aqui
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA")
	// 		// las promesas
	// 		.then((response) => response.json()) // a la respuesta pasamela a tipo json
	// 		.then((data) => setInfo(data)); //
	// }, []);

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

	// const updatelist = ({ target }) => {
	// 	// Update query onKeyPress of input box
	// 	setNewlist(target.value);
	// };

	// const Search = ({ newlist }) => <li>{newlist}</li>;

	return (
		<div className="fondo">
			<div className="container todoframe">
				<div>
					<p className="title text-center">Todos</p>
				</div>
				<form
					onSubmit={handleSumbit}
					noValidate
					className="formulario align-items-center">
					<div className="col-auto">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label"></label>
						<input
							className="form-control form-control-sm"
							id="listTodos"
							list="todos"
							onChange={(e) => setTodo(e.target.value)}
							value={todo}
						/>
					</div>
					<button
						type="submit"
						className="button btn btn-primary"></button>
					<ul className="container mt-4 listOfTodos justify-content-center">
						{listTodos.map((item) => (
							<li className="todoName mt-2" key={item.id}>
								{item.name}
								<i
									className="basurita bi bi-trash align-items-end"
									onClick={() => deleteTodo(item.id)}></i>
							</li>
						))}
					</ul>
				</form>
			</div>
		</div>
	);
};

export default Home;
