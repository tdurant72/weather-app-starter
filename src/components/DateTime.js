import React from 'react';

const DateTime = () =>{
    const date = new Date();
    return(
        <div className="date-time">
            {`${date.toLocaleTimeString()} - ${date.toLocaleDateString()} `}
        </div>
    )
}
export default DateTime;