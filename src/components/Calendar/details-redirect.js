import { useNavigate } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

function DetailsRedirect () {

    const Navigate = useNavigate();
    const Location = useLocation();

    return (
        
        <div>
        <h1>Task Details</h1>
        <pre>
        <h2>Description : {Location.state.title} </h2>
        <h3>
        <br></br>Project Id :  {Location.state.projectId} 
        <br></br>Task Id    :  {Location.state.taskId}
        <br></br>Start Time :  {Location.state.start}
        <br></br>End Time   :  {Location.state.end}
        </h3>

        </pre>
        <br></br>
        <button onClick={()=>Navigate(-1)}>Go Back</button>
        </div>
    )
};

export default DetailsRedirect;