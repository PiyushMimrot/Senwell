
import './App.css';
import { useState } from "react"
// import Use from './Components/useCustom';

import UseHooks from './Components/UseHooks';
function App() {

  let data = [
    { Name: "Mrinal", Num: 1 },
    { Name: "Sourabh", Num: 11 },

    { Name: "Piyush", Num: 5 },
    { Name: "Tanish", Num: 2 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Sourabh", Num: 11 },


    { Name: "Piyush", Num: 5 },
    { Name: "Ajay", Num: 3 },
    { Name: "Sourabh", Num: 11 },

    { Name: "Sourabh", Num: 11 },

    { Name: "Piyush", Num: 5 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Ajay", Num: 3 },
    { Name: "Piyush", Num: 5 },
    { Name: "Ajay", Num: 3 },
    { Name: "Sourabh", Num: 11 },

    { Name: "Piyush", Num: 5 },
    { Name: "Tanish", Num: 2 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Sourabh", Num: 11 },
    { Name: "Sourabh", Num: 11 },




  ]
  let [color, setColor] = useState(null)

  function ChangeColor(Num) {
    if (Num >0 && Num<3) {
      return "red";
    }
    if(Num>3 && Num <10){
    return "yellow";
    }
    if(Num >10){
      return "green"
    }
  }
  
  return (

    <div style= {{ textAlign:"center",fontSize:"30px"}} >
      <thead >
        <tr>
          <th >Name</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody style={{}}>
        {data.map((ele) => <tr   style={{ background: ChangeColor(ele.Num) }}>
          <td style= {{border:"2px solid black"}}>{ele.Name}</td>
          <td style= {{border:"2px solid black"}}>{ele.Num}</td>
        </tr>

        )}
      </tbody>
<UseHooks/>
    </div>
  );
}

export default App;
