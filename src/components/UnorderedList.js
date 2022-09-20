import { useEffect } from "react";

const UnorderedList = (props) => { 

	useEffect(() => {
		console.log("mount");
		return () => {
			let current = new Date();
			let now = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
			let info = `OrderetList is destroed at ${now}`;
			props.fn(info);
		};
	}, [])
	return (
		<ul>
			{
				props.data.map((elem, i) => {
					return <li key={i}>{ elem }</li>;
				})
			}
		</ul>
	);
};
export default UnorderedList;