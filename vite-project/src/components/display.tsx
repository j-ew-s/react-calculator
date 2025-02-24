import React from "react";


interface DisplayProperties{
    value :string;
}

const Display: React.FC<DisplayProperties> = ({value})=> {
    return (
        <div className="display">
            <p>{value}</p>
        </div>
    );
}

export default Display;