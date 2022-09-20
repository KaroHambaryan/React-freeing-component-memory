const UnorderedList = (props) => { 
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