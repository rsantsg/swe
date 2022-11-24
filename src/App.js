import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { useState, useEffect} from 'react'
import Body from './component/Body';

function App() {

  const [search, setSearch] = useState("");
  const [restaruant, setRestaruant] = useState("")
  const [card, setCard] = useState("")
  //This allows to call the API without being constantly being call. 
  //Its call only when it's need such as changes to the input bar. 

 const callApi = async (query)=>{
    const data = await fetch(query)
    const res = await data.json()
    return res
 }
const mcdonaldHandler =e =>{
    const brand =  `/restaurant/Chipotle`

   callApi(brand).then((r) => {
    console.log("LNAOOOOOOO ")
    console.log(r)
    setCard(r["menu"]) })
}
const tacoHandler = e =>{
  const brand =  `/restaurant/Trader Joe's`
  console.log("MAKE EEEE ")
  
  callApi(brand).then((e) =>{
    console.log("MAKE EEEE ", JSON.stringify(e["menu"]))

    setCard(e["menu"] )
  })
}
const cakeHandler = e =>{
  const food = '/meals/Chocolate cake'
  callApi(food).then((e) =>
    setCard(e["menu"])
  )
}
    return (
    <div className="container">
      <Header home={cakeHandler} mcdonald= {mcdonaldHandler} tacoBell={tacoHandler}/>
      <Body data={card}/>
    </div>
  );
}

export default App;
