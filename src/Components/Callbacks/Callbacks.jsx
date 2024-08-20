import React from "react";
function Callbacks({count,xyz}){
    console.log("Child rerendered");
  return(
    <div>
    <button onClick={xyz}>Increment</button>
    <h3>
    Count:{count}
    </h3>
    
    </div>
  )
}
export default React.memo(Callbacks);