export default function Submit({item}){

    return (
    <>
        <div className="container">
            <div class="card text-bg-secondary p-2">
                <div class="card-header">Submisstion: {item.name}</div>
                <div class="card-body">
                    <button className="btn btn-light" onClick={item.fn}>Run</button>
                    <br />
                    <textarea name="js" id="jscomplit" rows="20" cols="120"></textarea>
                </div>
            </div>
        </div>
    </>
);
}