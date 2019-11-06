import React from 'react';

function AddBuilding(props){
    
    const { addBuilding } = props;
    const codeRef = React.createRef();
    const nameRef = React.createRef();
    
    function addBuilding2(){
        let newBuilding =
            {
                code: codeRef.current.value.toUpperCase(),
                name: nameRef.current.value
            };
        addBuilding(newBuilding);
        codeRef.current.value = "";
        nameRef.current.value = "";
    }
    return (
        
        <div>
            <form>
                <p>Add new building</p>
                <input
                    type="text"
                    placeholder="*Building code to add"
                    ref={codeRef}
                    />
                <input
                    type="text"
                    placeholder="*Building name to add"
                    ref={nameRef}
                    />
            </form>
            <button onClick={addBuilding2.bind(this)}>Submit</button>
        </div>
    );
}

export default AddBuilding;