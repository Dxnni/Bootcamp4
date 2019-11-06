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
					<tr>{building.code}</tr>
					<tr>{building.name}</tr>
					{building.address && <tr>{building.address}</tr>}
					{building.coordinates && <tr>Lat: {building.coordinates.latitude}</tr>}
					{building.coordinates && <tr>Long: {building.coordinates.longitude}</tr>}
				</table>
			);
		});
	
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
