import React, { useState } from "react";
import TodoList from "./flex-div";
import "./../styles/App.css";
const Add=()=>{
    const [item_data,item_val]=useState("");
    const [item_arr, item_arrval]=useState([]);
    const data=(e)=>{
        console.log(e.target.value);
        item_val(e.target.value);
    }
    const listofItems=()=>{
        if(item_data!="")
        {
        item_arrval((oldItems)=>{
            return[...oldItems, item_data];
        });
    }
        item_val("");
    };
    const deleteItem=(id)=>{
        console.log("Items Deleted");
        item_arrval((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        });
    };
    const Editval=(id,d)=>{
        console.log(d);
        if(d!="")
        {
            item_arrval((id)=>{
                return[ d];
            });
        }
        // item_val(d.newData);
        // if(item_data!="")
        // {
        //     item_arrval((oldItems)=>{
        //         return[item_data];
        //     })
        // }
    }
   // const editval=(id)=>{}
    return(
        <>
        <div>
            <textarea id="task" onChange={data} value={item_data}></textarea>
            <button id="btn" onClick={listofItems}>ADD</button>
        </div>
       
            {item_arr.map((itemv,index)=>{
              return <TodoList
                  key={index}
                  txt={itemv}
                  id={index}
                  onSelect={deleteItem}
                  onEdit={Editval}
              />
            })}
        </>
    )
}

export default Add;