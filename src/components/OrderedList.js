

const OrderedList = (props) => { 
console.log('works...');
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