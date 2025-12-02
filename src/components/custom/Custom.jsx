import { useCallback } from "react"

export default function Custom(){
    const addFn = useCallback(()=>{
        let script = document.getElementById("customScript");
        if(script!=null) script.remove();
        script = document.createElement("script");
        script.setAttribute("id","customScript");
        script.innerHTML = document.getElementById("custom").value;
        document.body.appendChild(script);
        document.getElementById("addhere").innerHTML = `<button onclick='myfn()'>click</button>`;
    })
    return (
        <div className="container">
            <div class="card text-bg-secondary p-2">
                <div class="card-header">Custom Function:</div>
                <div class="card-body">
                    <button className="btn btn-light" onClick={()=> addFn()}>Add Function</button>
                    <br />
                    <textarea name="customjs" id="custom" rows="10" cols="120" style={{borderRadius:'5px'}}>
                        {`var myfn = ()=>{
                            // add your code here
                        }`}
                    </textarea>
                </div>
            </div>

            <div class="card text-bg-secondary p-2">
                <div class="card-header">Solve Here:</div>
                <div class="card-body">
                    <button className="btn btn-light">Submit</button>
                    <br />
                    <textarea name="js" id="jscomplit" rows="10" cols="120" style={{borderRadius:'5px'}}></textarea>
                </div>
            </div>
            <br />

            <div id="addhere"></div>
        </div>
    )
}