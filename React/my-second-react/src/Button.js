import React from "react";

function Btn(){
    return(
        <div>
            <button style={
                {
                    border:'none',
                    borderRadius:'12px',
                    backgroundColor:'red',
                    color:'white',
                    padding:'10px',
                    margin:'5px'
                }
            }>Add to cart</button>
        </div>
    )
}
export default Btn;