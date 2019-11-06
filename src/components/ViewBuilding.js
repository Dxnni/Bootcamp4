import React from 'react';
import RemoveBuilding from './RemoveBuilding';

function ViewBuilding(props) {

	const { data, selectedBuilding, removeBuilding } = props;

	const viewBuilding = data
		.filter(building => {
			return building.id === selectedBuilding;
		})
		.map(building => {
			return (
				<div>
					<table>					
						<tr>{building.code}</tr>
						<tr>{building.name}</tr>
						{building.address && <tr>{building.address}</tr>}
						{building.coordinates && <tr>Lat: {building.coordinates.latitude}</tr>}
						{building.coordinates && <tr>Long: {building.coordinates.longitude}</tr>}
					</table>
					<RemoveBuilding
						selectedBuilding={selectedBuilding}
						removeBuilding={removeBuilding}
					/>
				</div>
			);
		});
	
	return (
		<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>				
			</p>
			{viewBuilding}			
		</div>
	);
}
export default ViewBuilding;
