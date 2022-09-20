import { useState } from 'react';
import OrderedList from './components/OrderedList';
import UnorderedList from './components/UnorderedList';
import './App.css';

function App() {
	const [writers, setWriters] = useState([
		"Kafka", "Saramango", "Shakespeare", "Joyce", "Dostoevsky"
	]);
	const [status, setStatus] = useState(true);
	const [log, setLog] = useState(null);
	
	const changeStatus = () => {
		setStatus(status => !status)
	}
	return (
		<div>
			<h3>{ log }</h3>
			{status ? <p>Oredered List</p> : <p>Unoredered List</p>}
			{
				status ? <OrderedList data={writers} fn={ setLog } /> :
					<UnorderedList data={writers} fn={ setLog }/>
			}
			<button onClick={changeStatus}>Change List</button>

		</div>
	);

}

export default App;