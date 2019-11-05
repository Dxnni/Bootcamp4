import React from 'react';

function Search(props) {
	
	const { filterUpdate } = props;
	const myRef = React.createRef();    	

	function filterUpdate2() {
		//Here you will need to update the value of the filter with the value from the textbox
		const val = myRef.current.value;
		filterUpdate(val);
	}
	
	//You will need to save the value from the textbox and update it as it changes
	//You will need the onChange value for the input tag to capture the textbox value
		
	return (
		<form>
			<input
				type="text"
				placeholder="Type to Filter"
				ref={myRef}
				onChange={filterUpdate2.bind(this)}
				/>
		</form>
	);
}
export default Search;
