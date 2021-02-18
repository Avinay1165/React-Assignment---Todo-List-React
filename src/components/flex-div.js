import React, { useState } from "react";


const TodoList=(props)=>{
    const pro_val=props.val;
    const [newData, currData]=useState(props.txt);
    const editData=(e)=>{
        console.log(e.target.value);
        currData(e.target.val)
        //document.getElementById('')
    }
    const styleEdit={
        width:"auto",
        height:"100%",
        position:"relative",
        float:"left"
    };
    const td_btn={
        height:"100%",
        display:"none",
    };
    const [currstate, setSt]=useState(td_btn);

    const show_edit=()=>{
        const display={
            height:"100%",
            display:"block"
        };
        setSt(display);

    }
    const hide_edit=()=>{
        setSt(td_btn);
    }


    return (
        <>
        <div>
        <li className="list" >{props.txt}</li>
            <button className="delete" onClick={()=>{
                props.onSelect(props.id);
            }}>Delete</button>
            <button className="edit" style={styleEdit} onClick={show_edit}>Edit</button>
            <div style={currstate} > <textarea id="ta" onChange={editData} value={newData}></textarea>
            <button id="saveTask" onClick={()=>{
                const v=document.getElementById('ta').value;
                props.onEdit(props.id,v);
            }}>Save</button></div>
        </div>
        </>
    )
}
export default TodoList;





// const Flex_div=(props)=>{
//     const styleEdit={
//         width:"auto",
//         height:"100%",
//         position:"relative",
//         float:"left"
//     };
//     const td_btn={
//         height:"100%",
//         display:"none"
//     };
//     const [currstate, setSt]=useState(td_btn);

//     const show_edit=()=>{
//         const display={
//             height:"100%",
//             display:"block"
//         };
//         setSt(display);

//     }
//     const hide_edit=()=>{
//         setSt(td_btn);
//     }
//     return(
//     <div>
//         <li className="list">{props.item}</li>
//         <button className="delete">Delete</button>
//         <button className="edit" style={styleEdit} onClick={show_edit}>Edit</button>
//       <div style={currstate} > <textarea id="ta" ></textarea><button id="saveTask" onClick={hide_edit}>Save</button></div>
//     </div>
//     )
// }

// export default Flex_div;