import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState("");
	const [listTodos, setListTodos] = useState([]);
	const handleSumbit = (e) => {
		e.preventDefault();
		setTodo("");
		setListTodos([...listTodos, { label: todo, done: false }]);
		updateList([...listTodos, { label: todo, done: false }]);
	};
	const deleteTodo = (label) => {
		const updatedList = listTodos.filter((item) => item.label !== label);
		updateList(updatedList);
		setListTodos(updatedList);
	};

	function updateList(updatedList) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA", {
			method: "PUT",
			body: JSON.stringify(updatedList),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function getList() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/joaquinA")
			.then((response) => response.json())
			.then((data) => setListTodos(data));
	}

	useEffect(() => {
		getList();
	}, []);

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
							<li className="todoName mt-2" key={item.label}>
								{item.label}
								<i
									className="basurita bi bi-trash align-items-end"
									onClick={() => deleteTodo(item.label)}></i>
							</li>
						))}
					</ul>
				</form>
			</div>
		</div>
	);
};

export default Home;
