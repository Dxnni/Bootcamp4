import React from 'react';

function ViewBuilding(props) {

	const { data, selectedBuilding } = props;

	const viewBuilding = data
		.filter(building => {
			return building.id === selectedBuilding;
		})
		.map(building => {
			return (
				<table>
					<tr key={building.id}>
						<td>{building.code} </td>
						<td> {building.name} </td>							
					</tr>
					<tr>
						<td>{building.address}</td>
					</tr>
				</table>
			);
		});
	
		//console.log('Viewing Selected Building:', building);
	return (
		<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>				
			</p>
			<div>{viewBuilding}</div>
		</div>
	);
}
export default ViewBuilding;
