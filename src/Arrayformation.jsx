import react from "react";


const Arrayformation = (props) => {




    return (
        <>
            <div className="divkeandr" id="divkeandr">
                <button className="btnn" id="btnnid" onClick={() => {
                    return props.delete(props.id)
                }}>-</button>
                <li style={props.stile}>{props.text}</li>
            </div>
        </>)
}


export default Arrayformation;