import { useState } from 'react';
import OrderedList from './components/OrderedList';
import UnorderedList from './components/UnorderedList';
import './App.css';

function App() {
	const [writers, setWriters] = useState([
		"Kafka", "Saramango", "Shakespeare", "Joyce", "Dostoevsky"
	]);
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{ count }</h1>
			<OrderedList data={writers} />
			<UnorderedList data={writers} />

			<button onClick={() => setCount(count + 1) }>Change List</button>

		</div>
	);

}

export default App;