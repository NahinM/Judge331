export default function Question({item}){
    return (
    <div className="container">
        <div class="card text-bg-secondary p-2">
            <div class="card-header">{item.name}</div>
            <div class="card-body">
                <p class="card-text">{item.detail}</p>
            </div>
        </div>
        <div class="card text-bg-secondary p-2">
            <div class="card-header">Solve Here:</div>
            <div class="card-body">
                <button className="btn btn-light">Submit</button>
                <br />
                <textarea name="js" id="jscomplit" rows="20" cols="120" style={{borderRadius:'10px'}}></textarea>
            </div>
        </div>
        <br />
    </div>
    );
}