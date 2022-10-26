import React, {useState} from "react";

export const Home = (props) => {
   const {init} = props;
	const [counter, setCounter] = useState(init);

	const add = () => {
		setCounter(counter + 1);
	};

	const remove = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(0);
	};

	return (
		<>
			<h1>Webpack App !!</h1>
			<button onClick={add}>Add</button>
			<button onClick={remove}>Remove</button>
			<button onClick={reset}>Reset</button>
			{counter}
		</>
	);
};
