import React from 'react';

function BuildingList(props) {

	const { data, filterText, selectedUpdate } = props;

	const buildingList = data
		.filter(building => {
			return building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick={()=> selectedUpdate(directory.id)}> 
						{directory.name}
					</td>
				</tr>
			);
		});

	return <div>{buildingList}</div>;
}
export default BuildingList;
