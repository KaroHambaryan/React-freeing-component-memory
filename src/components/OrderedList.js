import { useEffect } from "react";

const OrderedList = (props) => { 

	useEffect(() => {
		return () => {
			let current = new Date();
			let now = current.getHours() + ":" + current.getMinutes()+ ":" + current.getSeconds();
			let info = `OrderetList is destroed at ${now}`;
			props.fn(info);
		};
	}, [])
	
	return (
		<ol>
			{
				props.data.map((elem, i) => {
					return <li key={i}>{ elem }</li>;
				})
			}
		</ol>
	);
};
export default OrderedList;