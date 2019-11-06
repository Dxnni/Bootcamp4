import React from 'react';

function RemoveBuilding(props){
    
    const {selectedBuilding, removeBuilding} = props;    
    
    return (
        <button onClick={()=> removeBuilding(selectedBuilding)}>Remove</button>
    );
}

export default RemoveBuilding;