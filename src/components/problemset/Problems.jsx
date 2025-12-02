import { useState } from "react";

export default function ProblemSet({setItem}){
    const [data,setData] = useState({
        "problemSet":"Problem Set-1",
        "data":[{
            name:"Question1",
            detail:"language w ends with 0",
            fn: function(){
                console.log("question1");
            }
        },
        {
            name:"Question2",
            detail:"language w ends with 0",
            fn: function(){
                console.log("question2");
            }
        },
        {
            name:"Question3",
            detail:"language w ends with 0",
            fn: function(){
                console.log("question3");
            }
        }]
});
    

    return (
        <>
        <div className="container">
        <h1>{data["problemSet"]}</h1>
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">SL</th>
            <th scope="col">Problems</th>
            </tr>
        </thead>
        <tbody>
                {
                    data["data"].map((item,index) => 
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td onClick={()=> setItem(item)}>{item.name}</td>
                        </tr>
                    )
                }
        </tbody>
        </table>
        </div>
        </>
    );
}