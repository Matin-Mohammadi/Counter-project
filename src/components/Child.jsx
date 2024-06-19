

const Child = (props) => {
    return (
        <div style={{ textAlign: "center", }}>
            <h1 style={{
                color: props.num == 0 ? "red" : "whitesmoke",
                backgroundColor: "black",
                height: "8rem",
                lineHeight: "8rem",
                fontSize: "5rem",
                marginBottom: "3rem"
            }}>{props.num}</h1>
            <div className="buttons">
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-success"} onClick={props.increase} >Plus</button>
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-success"} disabled={props.num == 0 ? true : false} onClick={props.reset}>Reset</button>
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-success"} onClick={props.decrease}>Minus</button>
            </div>

        </div>
    )
}
export default Child