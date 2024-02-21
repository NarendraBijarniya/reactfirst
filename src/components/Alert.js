import React from "react";


 function Alert(props){
    const capatilize=(word)=>{
        let lowercase = word.toLowerCase();
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    }
    return (
       props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.type)}</strong>! {props.alert.msg}
        </div>
    )
}
export default Alert;