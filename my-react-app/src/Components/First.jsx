import { useEffect, useState } from "react";

export default function First(){
    useEffect(()=>{
        console.log("First component loaded")
    },[]);
    var [name,setName] = useState("Ramu");
     var [nam,setNam] = useState("Ramu");
    //var name = "Ramu";
    const handleClick = ()=>{
  
       setNam("Somu");
    }
    return (<>
        <h2>Welcome {name}</h2>
        <input type="text" value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
        />
        <button onClick={handleClick}>Click to test</button>
    </>);
}