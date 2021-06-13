import react, { useState } from "react";
import "./index.css";
import Arrayformation from "./Arrayformation"



const App = () => {
  const [stateone, setstateone] = useState("")
  const [statetwo, setstatetwo] = useState([])


  const csss = {
    display: "flex",
    justifyContent: "center",
    fontSize: "27px",
    fontFamily: "fantasy",
    color: "white",
    margin: "16px"
  }



  const showtext = (event) => {
    console.log(event.target.value)

    setstateone(event.target.value)

  }


  const showreal = () => {
    console.log("hy")

    setstatetwo((valueusestateseuthakeyhalana) => {
      return ([...valueusestateseuthakeyhalana, stateone])
    })

  }


  const clearform = (id) => {
    console.log("working")

    setstatetwo((valueusestateseuthakeyhalana) => {

      return valueusestateseuthakeyhalana.filter((arrelement, index) => {
        return index !== id;
      })

    })

  }
  
  return (<>

    <div className="container" id="containerid">
      <div className="containertwo" id="containertwoid">
        <h1>TODO LIST</h1>
      </div>
      <div className="outsideinput" id="outsideinputid">
        <input className="insideinput" id="insideinputid" name="todo" type="text" placeholder="Things todo..." onChange={showtext} />
        <button className="btn" id="btnid" onClick={showreal}>+</button>
      </div>
      <ol>
        {statetwo.map((sarearray, index) => {
          return (<>
            <Arrayformation text={sarearray} stile={csss} key={index} id={index} delete={clearform} />
          </>)
        })}
      </ol>
    </div>
  </>
  );
}
export default App;